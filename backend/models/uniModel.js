const mongoose = require('mongoose');
const slugify = require('slugify');

const uniSchema = new mongoose.Schema({
  universityFullName: {
    type: String,
    required: [true, 'A uni must have a full name'],
    unique: true,
    trim: true,
    maxLength: [80, 'A uni name must have less or equal than 40 characters']
  },
  slug: String,
  universityShortName: {
    type: String,
    required: [true, 'A uni must have a full name'],
    unique: true,
    trim: true
  },
  courses: {
    type: [Object],
    required: [true, 'A uni must have courses']
  },
  ratingsAverage: {
    type: Number,
    default: 3,
    required: [true, 'A uni must have rating'],
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be less 5.0']
  },
  summary: {
    type: String,
    required: [true, 'A uni must have summary'],
    trim: true
  },
  admission: {
    type: [String],
    required: [true, 'A uni must have admission system']
  },
  scolarship: {
    type: String,
    required: [true, 'A uni must have scholarship section'],
    trim: true
  },
  socialLife: {
    type: String
  },
  tuitionFee: {
    type: Number,
    required: [true, 'A uni must have a fee'],
    validate: {
      validator: function(val) {
        // works only on creating
        return val > 0;
      },
      message: 'Tuition fee ({VALUE}) cannot be less than 0'
    }
  },
  establishedIn: {
    type: Date,
    required: [true, 'A uni must have an established date']
  },
  images: [String],
  imageCover: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  secretUni: {
    type: Boolean,
    default: false
  },
  location: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point']
    },
    coordinates: [Number],
    address: String
  }
});

uniSchema.index({ ratingsAverage: 1, establishedIn: 1 });
uniSchema.index({ slug: 1 });
uniSchema.index({ ratingsAverage: 1 });
uniSchema.index({ location: '2dsphere' });

// Document Middleware: runs before .save() and .create()
uniSchema.pre('save', function(next) {
  this.slug = slugify(this.universityShortName, { lower: true });
  next();
});

// Query Middlewate
uniSchema.pre(/^find/, function(next) {
  this.find({ secretUni: { $ne: true } });
  next();
});

// Aggrefation Middleware
// uniSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretUni: { $ne: true } } });
//   next();
// });

const Uni = mongoose.model('Uni', uniSchema);

module.exports = Uni;
