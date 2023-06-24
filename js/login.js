function getCookie() {
    var c = document.cookie;

    if (c) 
        return c.substring(c.indexOf("=") + 1);
        
    return null;
}

window.onload = function(){
    let user = getCookie('user');
    console.log(user);
    
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
    
