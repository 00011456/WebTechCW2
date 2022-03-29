const multer = require('multer');
const sharp = require('sharp');
const Uni = require('./../models/uniModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUniImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 }
]);

// upload.single('image') req.file
// upload.array('images', 5) req.files

exports.resizeUniImages = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();

  // 1) Cover image
  req.body.imageCover = `uni-${req.params.id}-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/unis/${req.body.imageCover}`);

  // 2) Images
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `uni-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/unis/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});

exports.aliasTopUnis = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage';
  req.query.fields = 'ratingsAverage, universityShortName';
  next();
};

exports.getAllUnis = factory.getAll(Uni);
exports.getUni = factory.getOne(Uni);
exports.createUni = factory.createOne(Uni);
exports.updateUni = factory.updateOne(Uni);
exports.deleteUni = factory.deleteOne(Uni);

exports.getUniStats = catchAsync(async (req, res, next) => {
  const stats = await Uni.aggregate([
    {
      $match: { ratingsAverage: { $gte: 3 } }
    },
    {
      $group: {
        _id: { $toLower: '$universityShortName' },
        numUnis: { $sum: 1 },
        avgRating: { $avg: '$ratingsAverage' },
        avgFee: { $avg: '$tuitionFee' },
        minFee: { $min: '$tuitionFee' },
        maxFee: { $max: '$tuitionFee' }
      }
    },
    {
      $sort: { avgFee: 1 }
    }
    // {
    //   $match: { _id: { $ne: 'wut' } }
    // }
  ]);
  res.status(200).json({
    status: 'success',
    data: stats
  });
});

exports.getEstablishedYears = catchAsync(async (req, res, next) => {
  // Future feature
  // const year = req.params.year * 1;

  const plan = await Uni.aggregate([
    {
      $unwind: '$establishedIn'
    },
    {
      $group: {
        _id: { $year: `$establishedIn` },
        numUniEstablished: { $sum: 1 },
        unis: { $push: '$universityShortName' }
      }
    },
    {
      $addFields: {
        year: '$_id'
      }
    },
    {
      $project: {
        _id: 0
      }
    },
    {
      $sort: { numUniEstablished: -1 }
    },
    {
      $limit: 15
    }
  ]);
  res.status(200).json({
    status: 'success',
    data: plan
  });
});

exports.getUnisWithin = catchAsync(async (req, res, next) => {
  const { distance, lnglat, unit } = req.params;
  const [lng, lat] = lnglat.split(',');
  const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1;

  if (!lat || !lng) {
    next(
      new AppError(
        'Please provide latitude and longtitude in the format lat,lng',
        400
      )
    );
  }

  const unis = await Uni.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
  });

  res.status(200).json({
    status: 'success',
    count: unis.length,
    data: unis
  });
});

exports.getDistances = catchAsync(async (req, res, next) => {
  const { lnglat, unit } = req.params;
  const [lng, lat] = lnglat.split(',');

  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;

  if (!lat || !lng) {
    next(
      new AppError(
        'Please provide latitude and longtitude in the format lat,lng',
        400
      )
    );
  }

  const distances = Uni.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lng * 1, lat * 1]
        },
        distanceField: 'distance',
        distanceMultiplier: multiplier
      }
    },
    {
      $project: {
        distance: 1,
        name: 1
      }
    }
  ]);

  res.status(200).json({
    status: 'success',
    data: distances
  });
});
