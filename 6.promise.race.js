//@ts-nocheck
const { asyncTask, rejectedTask } = require('./utils')

// Se usa el metodo race para aquellas ocasiones 
// en las que podamos realizar una accion a traves
// de distintas promesas pero una vez realizada una
// no interese completar el resto

// El metodo race devuelve el resultado de la primera
// promesa que haya finalizado

Promise.race([
  asyncTask(8, 150),
  asyncTask(3, 25),
  asyncTask(5, 1000)
])
.then(results => console.log(`Results: ${results}`))
.catch(error => console.error(error))

// Si alguna de las promesas es rechazada solo se
// ira por la rama de gestion de rechazos/errores
// si falla antes de que se complete alguna de 
// las otras promesas

Promise.race([
  asyncTask(8, 150),
  asyncTask(3, 25),
  rejectedTask('Some error here')
])
.then(results => console.log(`Results: ${results}`))
.catch(error => console.error(error))