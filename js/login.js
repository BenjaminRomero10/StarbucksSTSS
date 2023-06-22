var formulario = document.getElementById("formulario-login");
var user = document.getElementById("user").value;
var pass = document.getElementById("pass").value;


formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  var url = "../php/login.php";

  var opciones = {
      method: "POST",
      body: new URLSearchParams({
          user: user,
          pass: pass
      }),
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      }
  };
  
  fetch(url, opciones).then(function(respuesta){
      return respuesta.json();
  }).then(function(data){
      if (data.status == "ok"){
          window.location.href = "../index.html";
      } else {
          alert(data.message);
      }
  }).catch(function(e){
      alert(e);
  });
});