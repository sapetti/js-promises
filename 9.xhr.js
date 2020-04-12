//@ts-nocheck

var xhttp = null
if (window.XMLHttpRequest) {
  // code for modern browsers
  xhttp = new XMLHttpRequest()
} else {
  // code for old IE browsers
  xhttp = new ActiveXObject("Microsoft.XMLHTTP")
}
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.responseText)
    }
}
// open(method, url, async)
xhttp.open("GET", "https://api.github.com/users", true)
xhttp.send()


// En los proyectos esto se mueve a funciones
function httpRequest(method, url, onSuccess, onError) {
  var xhttp = null
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest()
  } else {
    // code for old IE browsers
    xhttp = new ActiveXObject("Microsoft.XMLHTTP")
  }
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        onSuccess(xhttp.responseText)
      } else {
        onError('Unable to fetch data', this.readyState, this.status)
      }
  }
  xhttp.open(method, url, true)
  xhttp.send()
}

// JQuery : ajax
// https://api.jquery.com/jquery.ajax/
function httpRequest(url, method, onSuccess, onError) {
  $.ajax({
    url : url,
  
    type : method,
  
    success : onSuccess,
  
    error : onError,
  });
}

function httpRequestPromise(url, method) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url : url,
    
      type : method,
    
      success : resolve,
    
      error : reject,
    });
  })
}

httpRequestPromise('http://....', 'GET')
.then(function(data) {
  // ...
})
.catch(function(error) {
  //...
})

// fetch API
fetch('http://...', {
  method: 'GET',
  // ...
})
.then(data => console.log(data))
.then(error => console.error(error))