const movies = require("../data/movies");

const filmSorted = (movies) => {
  const result = movies.sort((a, b) => {
    return a.anoLancamento - b.anoLancamento;
  }).map((movie) => {
    return movie
  });

  return result
}

module.exports = {
  filmSorted
}