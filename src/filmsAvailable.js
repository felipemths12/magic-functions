const movies = require("../data/movies");

const filmsAvailable = (movies) => {
 const result = movies.filter((movie) => {
  if (movie.disponivel === true){
    return movie
  } else {
    return undefined
  }
 }).map((movie) => {
  return `${movie.titulo}`
 })

 return result
}

module.exports = {
  filmsAvailable
}