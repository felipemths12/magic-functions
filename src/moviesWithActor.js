const movies = require("../data/movies");

function moviesWithActor(ator) {
const result = movies.filter((movie) => {
  return movie.elenco.includes(ator)
});

return result

}

module.exports = {
  moviesWithActor
}