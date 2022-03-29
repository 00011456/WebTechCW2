const express = require('express');
const articleController = require('./../controllers/articleController');
const authController = require('./../controllers/authController');

const router = express.Router();

// router.use(authController.protect);

router
  .route('/')
  .get(articleController.getAllArticles)
  .post(
    // authController.restrictTo('admin', 'contributor'),
    articleController.createArticle
  );

router
  .route('/:id')
  .get(articleController.getArticle)
  .patch(
    authController.restrictTo('admin', 'contributor'),
    articleController.updateArticle
  )
  .delete(
    // authController.restrictTo('admin', 'contributor'),
    articleController.deleteArticle
  );

module.exports = router;
