const movies  = require("../data/movies");

const titlesAndDirectors = (movies) => {
 movies.filter((movie) => {
  return movie.titulo && movie.diretor
 }).forEach((movie) => { console.log(`Título: ${movie.titulo} - Diretor: ${movie.diretor}`)})
}



module.exports = {
  titlesAndDirectors
}