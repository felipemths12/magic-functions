const movies = require("../data/movies");

const nolanFilms = (movies) => {
 const result = movies.filter((movie) => {
  if (movie.diretor.includes("Christopher Nolan")){
    return movie
  }
 }).sort((a, b) => {
  return b.avaliacao - a.avaliacao
 }).map((movie) => {
  return movie
 });

 return result
}

module.exports = {
  nolanFilms
}