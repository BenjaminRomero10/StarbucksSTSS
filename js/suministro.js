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
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const idSpan = document.querySelector("#id");
const nombreSpan = document.querySelector("#nombre");
const pedidoSpan = document.querySelector("#pedido");
const stockSpan = document.querySelector("#stock");
const cerrar = document.querySelector(".close");

var seleccionarTr = function() {
    if (this.children.length > 0) {
        var id = this.children[0].textContent;
        var nombre = this.children[1].textContent;
        var ultimoPedido = this.children[2].textContent;
        var stock = this.children[4].textContent;
        var UM = this.children[5].textContent;

        idSpan.textContent = id;
        nombreSpan.textContent = nombre;
        pedidoSpan.textContent = ultimoPedido;
        stockSpan.textContent = stock + " " + UM;

        modal.classList.add("show");
        overlay.classList.add("show");

        for (var i = 0; i < trs.length; i++){
            trs[i].classList.remove("seleccionable");
            trs[i].removeEventListener("click", seleccionarTr);
        }
    }
  };


agregar.addEventListener("click", function(){
    const trs = document.querySelectorAll("tbody tr");
    if (trs.length > 0){
        for (var i = 0; i < trs.length; i++){
            trs[i].classList.add("seleccionable");
            trs[i].addEventListener("click", seleccionarTr);
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
            if (i < trs.length) {
                trs[i].classList.remove("seleccionable");
                trs[i].removeEventListener("click", seleccionarTr);
            }
        }
    }
});

cerrar.addEventListener("click", function() {
    modal.classList.remove("show");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", function() {
    modal.classList.remove("show");
    overlay.classList.remove("show");
});