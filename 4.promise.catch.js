//@ts-nocheck

// Las funciones que se añadan en el método catch se llamaran 
// cuando ocurra un error a lo largo de la cadena de las promesas
new Promise(() => {
  throw new Error('D´oh!')
})
.then(result => console.log(result)) // Aqui no llega
.catch(error => console.error('Catch sin pasar por el then 1')) // Pasa directamente al catchk

Promise.resolve(1)
.then(result => result + 2) // 1 + 2
.then(result => {
  throw new Error('Go to Catch')
})
.then(result => console.log(result)) // Aqui no llega
.catch(error => console.error('Catch sin pasar por el then 2')) // Pasa directamente al catchk

// Un promesa rechazada no pasa por el catch
Promise.reject(new Error('🐷🐷🐷'))
.then(result => console.log(`Todo ha ido bien ${result}`))
.catch(error => `Ha ocurrido un error ${error}`)

// Una promesa rechaza va por la rama de reject del then
Promise.reject('🙉🙉🙉')
.then(
  result => console.log(result), // No pasa por la rama de resolve
  error => console.error(`Then.error ${ error }`)) // Pasa por la rama reject!!
.catch(error => console.error(`Catch ${error}`)) // No pasa por el catch
