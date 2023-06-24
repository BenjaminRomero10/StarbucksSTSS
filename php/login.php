<?php
    session_start();
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
        echo "<form id='hidden-form' action='../index.html' method='post'>";
        echo "<input type='hidden' name='user' value='$user'>";
        echo "<input type='submit' value='Iniciar sesión'>";
        echo "</form>";
        //usar javascript para hacer click en el botón de submit automáticamente
        echo "<script>document.getElementById('hidden-form').submit();</script>";

        header('Location: ../index.html');
    } else {
        $SESSION["user"] = null;
        header('Location: ../index.html');
    }

    sqlsrv_free_stmt($getResults);
    sqlsrv_close($conn);
?>

