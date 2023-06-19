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
        $js_code = 
        '<script>
            Toastify({
                text: "Inicio de sesión realizado",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#1e3932",
                stopOnFocus: true,
                style: {
                    color: "white",
                    border "2px solid white"
                }
            ).showToast();
        </script>';
        
        file_put_contents('../index.html', $js_code, FILE_APPEND);

        header('Location: ../index.html');
    } else {
        echo 'Login Incorrecto';
    }

    sqlsrv_free_stmt($getResults);
    sqlsrv_close($conn);
?>

