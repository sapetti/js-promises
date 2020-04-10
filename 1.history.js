//@ts-nocheck
const { fetchData } = require('./utils')

// Callback: funcion que se pasa para y cuya ejecucion 
// es delegada a la funcion que normalmente es asincrona
fetchData(1, function() { 
  // ...
})

// Problema 1: Control de los callbacks
function ups(callback) {
  // ...
  callback()
  // ...
  callback()
  // ...
  callback()
}

function upsError(onSuccess, onError) {
  // ...
  onSuccess()
  // ...
  onError()
}


// Problema 2: Callback Hell - Pyramid of doom
// http://i.imgur.com/EGGwaXP.png

fetchData(2, function(result1) {
  fetchData(result1, function(result2) {
    fetchData(result2, function(result3) {
      console.log(result3)
    })
  })
})

// Problema 3: Callback Hell - Ocultar los detalles
const cb1 = result => console.log(result)
const cb2 = result => fetchData(result, cb1)
const cb3 = result => fetchData(result, cb2)

fetchData(2, cb3)


// Problema4: Callback Hell - Exponer los callbacks
function fetchSomeData(callback1, callback2, callback3) {
  // ..
}
