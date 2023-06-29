<?php
    session_start();
    echo $_SESSION['user'];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Starbucks STSS</title>
    <link href="https://www.starbucks.pe/Multimedia/logo/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <script src="https://kit.fontawesome.com/ab4da2f3ac.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../stylesheets/style.css">
</head>
<body>
    <header>
        <div class="logo">
            <a href="../index.html"><img src="../source/img/Logo.png" alt="logo"></a>
        </div>
        <nav>
            <ul>
                <li><a href="#">CONTROL DE SUMINISTROS</a></li>
            </ul>
        </nav>
    </header>
    <div class="filters">
        <a href="#" class="congelados" >CONGELADOS</a>
        <a href="#" class="refrigerados">REFRIGERADOS</a>
        <a href="#" class="secos">SECOS</a>
        <a href="#" class="limpieza">LIMPIEZA</a>
        <a href="#" class="publicidad">PUBLICIDAD</a>
    </div>
    <div class="inventoryContent">
       <section class="congeladosSection">
        <h2>CONGELADOS</h2>
        <div class="itemContainer">
            <div class="item">
                <div class="itemTitle">
                    <h3>Item Title</h3>
                </div>
                <div class="itemContent">
                    <div class="img"></div>
                    <button class="button1">+1</button>
                    <button class="button2">-1</button>
                    <button class="button3">PERSONALIZADO</button>
                    <div class="count">
                        <p>25</p>
                    </div>
                </div>
            </div>
        </div>
       </section>
       <section class="refrigeradosSection">
        <h2>REFRIGERADOS</h2>
        <div class="itemContainer">
            
        </div>
       </section>
       <section class="secosSection">
        <h2>SECOS</h2>
        <div class="itemContainer">
            
        </div>
       </section>
       <section class="limpiezaSection">
        <h2>LIMPIEZA</h2>
        <div class="itemContainer">
            
        </div>
       </section>
       <section class="publicidadSection">
        <h2>PUBLICIDAD</h2>
        <div class="itemContainer">
            
        </div>
       </section>
    </div>
    <footer>
        <div class="footerImage">
            <img src="../source/img/Logo.png" alt="footerLogo">
        </div>
        <div class="footerContent">
            <div class="terms">
                <p class="title">POLITICAS Y TERMINOS</p>
                <ul>
                    <li><a href="#">POLITICAS DE PRIVACIDAD</a></li>
                    <li><a href="#">TERMINOS Y CONDICIONES</a></li>
                </ul>
            </div>
            <div class="aboutUs">
                <p class="title">SOBRE NOSOTROS</p>
                <ul>
                    <li><a href="#">QUIENES SOMOS</a></li>
                    <li><a href="#">NUESTRA MISION</a></li>
                    <li><a href="#">NUESTRA VISION</a></li>
                </ul>
            </div>
            <div class="contact">
                <p class="title">CONTACTO Y SOPORTE</p>
                <ul>
                    <li><a href="#">WHATSAPP: (+51)999770316</a></li>
                    <li><a href="">CORREO: CONTACT@STSS.COM</a></li>
                </ul>
            </div>
        </div>
        <div class="social">
            <p>SIGUENOS</p>
            <div class="buttons">
                <a href="https://www.facebook.com/starbucksperu" target="_blank"><i class="fa-brands fa-square-facebook fa-xl" style="color: #1e3932;"></i></a>
                <a href="https://www.instagram.com/starbuckspe" target="_blank"><i class="fa-brands fa-instagram fa-xl" style="color: #1e3932;"></i></a>
            </div>
            <p class="copy">©2023 Lasino. Todos los Derechos Reservados.</p>
        </div>
    </footer>
    <script src="../js/inventario.js"></script>
</body>
</html>