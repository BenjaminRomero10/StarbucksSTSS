window.onload = function(){
    let user = sessionStorage.getItem('user');

    if(user){
        Toastify({
            text: "Bienvenido " + user + ", has iniciado sesión correctamente.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "#1e3932",
            stopOnFocus: true,
        }).showToast();
    }
}