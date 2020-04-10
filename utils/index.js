const MS = 250

function asyncTask(value, ms) {
  return new Promise(res => setTimeout(() => {
    res(value)
  }, ms))
}

function rejectedTask(value) {
  return Promise.reject(value)
}

function fetchData(value, callback) {
  setTimeout(function() {
    callback(value)
  }, MS)
}

module.exports = {
  asyncTask,
  rejectedTask,
  POKE_API: "https://pokeapi.co/api/v2/pokemon",
}