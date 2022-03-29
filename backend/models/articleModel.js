const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
  {
    articleTitle: {
      type: String,
      required: [true, 'Please, tell us article title'],
      trim: true
    },
    articleContent: {
      type: String,
      required: [true, 'Please provide article content'],
      trim: true
    },
    articleCover: {
      type: String,
      required: [true, 'Please provide article cover']
    },
    articleTag: {
      type: String,
      required: [true, 'Article must belong to a uni']
    },
    articleLikes: {
      type: Number,
      uppercase: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Article must have an author']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Embeding goes below
// articleSchema.pre('save', async function(next) {
//   const authorsPromises = this.authors.map(async id => await User.findById(id));
//   this.authors = await Promise.all(authorsPromises);

//   next();
// });

// Populating with authors
articleSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'author',
    select: '-__v -email'
  });

  next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
