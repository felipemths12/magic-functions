const movies = require("../data/movies");

const bestRatedFilm = (movies) => {
  
  
  const result = movies.sort((a, b) => {
    return b.avaliacao - a.avaliacao
  }).shift()

  return result
}

module.exports = {
  bestRatedFilm
}