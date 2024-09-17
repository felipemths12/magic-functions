const movies = require("../data/movies");

const getAllTitles = (movies) => {
 const result = movies.map((movie) => {
  return movie.titulo
 });

 return result
}

module.exports = {
  getAllTitles
}