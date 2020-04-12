//@ts-nocheck

function someAsyncTask(onSuccess, onError) {
  setTimeout(function() {
    onSuccess(Math.floor(Math.random() * 10))
  }, 500)
}

function someAsyncTaskPromise() {
  return new Promise(function(resolve, reject) {
    someAsyncTask(resolve, reject)
  })
}

someAsyncTaskPromise()
.then(value => console.log('Value: ' + value))
.catch(error => console.error(error))