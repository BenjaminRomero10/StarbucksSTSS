var url = "../php/login.php";

var opciones = {
    method: "POST",
    body: new URLSearchParams({
        user: $("#user").val(),
        pass: $("#pass").val()
    }),
    header: {
        "Content-Type" : "application/x-www-form-urlencoded"
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