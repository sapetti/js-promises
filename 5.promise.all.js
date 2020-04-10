//@ts-nocheck
const { asyncTask, rejectedTask } = require('./utils')

// Se usa el metodo all para aquellas ocasiones 
// en las que necesitemos realizar varias operaciones
// al mismo tiempo y esperar a que todas terminen

// El metodo all devuelve un array con los resultados
// de las operaciones en el mismo orden 

Promise.all([
  asyncTask(8, 150),
  asyncTask(3, 25),
  asyncTask(5, 1000)
])
.then(results => console.log(`Results: ${results}`))
.catch(error => console.error(error))

// Si alguna de las promesas es rechazada o tiene un
// error no se esperara por el resto y el flujo
// continuara por la rama para controlar la promesa 
// rechazada o su error

Promise.all([
  asyncTask(8, 150),
  asyncTask(3, 25),
  rejectedTask('Some error here')
])
.then(results => console.log(`Results: ${results}`))
.catch(error => console.error(error))