<?php
    $user = $_POST ['user'];
    $pass = $_POST ['pass'];
    $serverName = "stss.database.windows.net";
    $connectionOptions = array(
        "Database" => "STSSDB",
        "Uid" => "CloudSA4049f354",
        "PWD" => "Contraseña11"
    );

    //Establishes the connection
    $conn = sqlsrv_connect($serverName, $connectionOptions);
    if ($conn === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    $tsql= "EXEC ObtenerContraseña" . "'" . $user . "';";  
    $getResults= sqlsrv_query($conn, $tsql);

    if ($getResults == FALSE) echo (sqlsrv_errors());

    $row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_ASSOC);
    if (strtolower($row['Nombre']) == strtolower($user) && $row['Contra'] == $pass){
        // CODIGO INICIO SESION
        session_start();
        echo "El identificador de la sesión actual es: " . session_id();

        session_id("nuevo_id");
        echo "El nuevo identificador de la sesión actual es: " . session_id();
        // header('Location: ../index.html');
        // exit;
    } else {
        echo 'Login Incorrecto';
    }

    sqlsrv_free_stmt($getResults);
    sqlsrv_close($conn);
?>

