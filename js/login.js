window.onload = function(){
    let user = sessionStorage.getItem('user');
    console.log(user);
    
    if(user != null){
        Toastify({
            text: "Bienvenido, has iniciado sesión correctamente.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "#1e3932",
            stopOnFocus: true,
        }).showToast();
    }

}
    
