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
const fechaSpan = document.querySelector("#fecha");
const stockSpan = document.querySelector("#stock");
const cerrar = document.querySelector(".close");
const modalButton = document.querySelector(".modalButton");
let productos = [];

class Producto {
    constructor(id, nombre, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

if(!(localStorage.key(0))){
    localStorage.setItem("Productos", JSON.stringify(productos));
}

modalButton.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove("show");
    overlay.classList.remove("show");
    let cantidad = document.querySelector("#cantidad").valueAsNumber;
    let producto = new Producto(idSpan.textContent, nombreSpan.textContent, cantidad);
    let nuevalista = JSON.parse(localStorage.getItem("Productos"))
    nuevalista.push(producto);
    localStorage.setItem("Productos", JSON.stringify(nuevalista))

    Toastify({
        text: "Item agregado a la lista",
        duration: 2500,
        close: false,
        gravity: "top",
        position: "right",
        backgroundColor: "#1e3932",
        stopOnFocus: false,
    }).showToast();
})

var seleccionarTr = function() {
    if (this.children.length > 0) {
        var id = this.children[0].textContent;
        var nombre = this.children[1].textContent;
        var ultimoPedido = this.children[2].textContent;
        var fecha = this.children[3].textContent;
        var stock = this.children[4].textContent;
        var UM = this.children[5].textContent;

        idSpan.textContent = id;
        nombreSpan.textContent = nombre;
        pedidoSpan.textContent = ultimoPedido;
        fechaSpan.textContent = fecha;
        stockSpan.textContent = stock + " " + UM;

        modal.classList.add("show");
        overlay.classList.add("show");

        const trs = document.querySelectorAll("tbody tr");

        if (trs.length > 0){
            for (var i = 0; i < trs.length; i++){
                trs[i].classList.remove("seleccionable");
                trs[i].removeEventListener("click", seleccionarTr);
            }
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