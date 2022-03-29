const express = require('express');
const uniController = require('./../controllers/uniController');
const authController = require('./../controllers/authController');

const router = express.Router();

// router.param('id', uniController.checkID);

router
  .route('/top-5-best')
  .get(uniController.aliasTopUnis, uniController.getAllUnis);

router.route('/uni-stats').get(uniController.getUniStats);
router
  .route('/established-years/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    uniController.getEstablishedYears
  );

router
  .route('/unis-within/:distance/center/:lnglat/unit/:unit')
  .get(uniController.getUnisWithin);

router.route('/distances/:lnglat/unit/:unit').get(uniController.getDistances);

router
  .route('/')
  .get(uniController.getAllUnis)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'contributor'),
    uniController.createUni
  );

router
  .route('/:id')
  .get(uniController.getUni)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'contributor'),
    uniController.uploadUniImages,
    uniController.resizeUniImages,
    uniController.updateUni
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'contributor'),
    uniController.deleteUni
  );

module.exports = router;
