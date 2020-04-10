//@ts-nocheck

// La API de promesas ayuda a solucionar los problemas 
// para trabajar con tareas asincronas de una manera
// mas fiable y sencilla
// Esta API se añade en ES6

// Las promesas pueden estar en tres estados:
// - Pending
// - Fulfilled
// - Rejected
// ** Una promesa esta Settled cuando esta fulfilled o rejected
// ** Una promesa podria quedar para siempre en Pending

// Como crear una promesa
const myPromise = new Promise(function(resolve, reject) {
  try {
    // ...
    resolve('Todo ha ido bien!')
  } catch(error) {
    reject(error)
  }
})
// * Si en la promesa se llama resolve y luego a reject, solo se tiene en 
// cuenta el primero y viceversa.
// * Solo se tendra en cuenta la primera llamada a resolve/reject
// aunque sean del mismo tipo


// Metodos estaticos de inicializacion 

Promise(function(resolve, reject) {
  resolve('🐷🐷🐷')
})

Promise(function(resolve, reject) {
  reject('☠️☠️☠️')
})

Promise.resolve('🐷🐷🐷')
Promise.reject('☠️☠️☠️')
