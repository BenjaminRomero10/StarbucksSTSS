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
        if(isset($_POST['remember']) && $_POST['remember'] == 1){
            setcookie('user', $user, strtotime("+1 week"));
            setcookie("expiry", strtotime("+1 week"), strtotime("+1 week"));
            setcookie("firstTime", "true");
        }

        header('Location: ../index.html');
    } else {
        $SESSION["user"] = null;
        header('Location: ../index.html');
    }

    sqlsrv_free_stmt($getResults);
    sqlsrv_close($conn);
?>

