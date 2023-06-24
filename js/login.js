window.onload = function(){
    var user = document.getElementsByName('user')[0].value;
    sessionStorage.setItem('user', user);
    var firstTime = sessionStorage.getItem('firstTime');
    if (user && firstTime != 'false') {
        Toastify({
            text: "Bienvenido, has iniciado sesión correctamente.",
            duration: 3000,
            close: false,
            gravity: "top",
            position: "right",
            backgroundColor: "#1e3932",
            stopOnFocus: true,
        }).showToast();
        sessionStorage.setItem('firstTime', 'false');
    }
    
}
    
