let MovieRating = function (pTitle, pRating) {
  this.title = pTitle;
  this.rating = parseInt(pRating);
};

MovieRating.prototype.isValid = function () {
  if (
    this.title.length <= 0 ||
    this.rating < 1 ||
    this.rating > 5 ||
    isNaN(this.rating)
  ) {
    return false;
  } else {
    return true;
  }
};

MovieRating.prototype.getAll = function () {
  return this.title + " with rating " + this.rating;
};
