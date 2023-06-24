function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0)    return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setCookie(name, value, expiry) {
    var d = new Date(expiry);
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

window.onload = function(){
    let user = getCookie('user');
    console.log(user);
    let expiry = getCookie("expiry");

    if (user && expiry > Date.now()){
        let firstTime = getCookie('firstTime')
        if (firstTime == "true"){
            Toastify({
                text: "Bienvenido, has iniciado sesión correctamente.",
                duration: 3000,
                close: false,
                gravity: "top",
                position: "right",
                backgroundColor: "#1e3932",
                stopOnFocus: true,
            }).showToast();

            setCookie("firstTime", "false");
        }
    }
}
    
