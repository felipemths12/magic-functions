const movies = require("../data/movies");

function getMovieById(id) {
 if (typeof id !== "number"){
  return undefined
 }

 if (id === 0){
  return undefined
 }

 if (id < 0){
  return undefined
 }
 const result = movies.find((movie) => movie.id === id);

 return result

}

module.exports = {
  getMovieById
}