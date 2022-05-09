document.addEventListener("DOMContentLoaded", function (event) {
  let movieArray = [];

  document.getElementById("addMovie").addEventListener("click", function () {
    let inputTitle = document.getElementById("movie-title").value;
    let inputRating = document.getElementById("movie-rating").value;
    const newMovie = new MovieRating(inputTitle, parseInt(inputRating));

    if (newMovie.isValid()) {
      movieArray.push(new MovieRating(inputTitle, parseInt(inputRating)));
      console.log(movieArray);
      document.getElementById("movie-title").value = "";
      document.getElementById("movie-rating").value = "";
    } else {
      alert("Invalid Input");
    }

    document
      .getElementById("showMovies")
      .addEventListener("click", function () {
        let displayString = "";
        let rating = document.getElementById("rating-area");
        rating.innerHTML = "";

        for (i = 0; i < movieArray.length; i++) {
          console.log(movieArray[i].getAll());
          let element = document.createElement("li");
          element.innerHTML = movieArray[i].getAll();
          rating.appendChild(element);
        }
      });
  });
});
