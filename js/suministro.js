// Toastify({
//     text: "¡Item agregado a la lista!",
//     duration: 2500,
//     close: false,
//     gravity: "top",
//     position: "right",
//     backgroundColor: "#1e3932",
//     stopOnFocus: false,
// }).showToast();

const agregar = document.querySelector(".agregar");
const eliminar = document.querySelector(".eliminar");
const lista = document.querySelector(".lista");
const pedir = document.querySelector(".pedir");
var seleccion = "";

agregar.addEventListener("click", function(){
    const trs = document.querySelectorAll("tbody tr");
    if (trs.length > 0){
        for (var i = 0; i < trs.length; i++){
            trs[i].classList.add("seleccionable");

            trs[i].addEventListener("click", function(){
                var id = this.children[0].textContent;
                var nombre = this.children[1].textContent;

                console.log(id);
                console.log(nombre);
            })
        }
    } else {
        Toastify({
            text: "No hay items en la tabla:(",
            duration: 2500,
            close: false,
            gravity: "top",
            position: "right",
            backgroundColor: "#A62E2E",
            stopOnFocus: false,
        }).showToast();

        for (var i = 0; i < trs.length; i++) {
            trs[i].classList.remove("seleccionable");
        }
    }
})
