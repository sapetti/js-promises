//@ts-nocheck
const { asyncTask, rejectedTask } = require('./utils')

// En ES9 (ES2018) se introduce el metodo finally
// El finally se ejecuta despues de una cadena 
// de thens o tras un catch

Promise.resolve(1)
.then(res => res + 1)
.then(res => res * 2)
.then(res => res / 2)
// .catch(error => {
//   console.error(error)
//   return 0
// })
.finally(res => showResult(res))