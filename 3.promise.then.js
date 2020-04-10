//@ts-nocheck

// Las funciones que se añadan en el método then se llamaran 
// cuando la promesa se complete satisfactoriamente o se
// rechace

Promise.resolve('🐷🐷🐷')
.then(result => console.log(result))

Promise.reject('🙉🙉🙉')
.then(
  result => console.log(result), // onResolve
  rejectedResult => console.log(rejectedResult)) // onReject

// El then de una promesa siempre devuelve otra promesa,
// de ahi que podamos concatenarlas
// .then() == .map()
Promise.resolve(1)
.then(result => result + 2) // 1 + 2
.then(result => result + 4) // 3 + 4
.then(result => console.log(result)) // 7

// Si el resultado que se devuelve en una promesa es otra
// promesa, el then le hace un flat
Promise.resolve(1)
.then(result => Promise.resolve(result)) // Promise<1>
.then(result => Promise.resolve(result)) // Promise<1>
.then(result => console.log(result)) // 1