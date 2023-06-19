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

    echo("Credenciales: " . $user . " " . $pass . "<br/>");

    $tsql= "EXEC ObtenerContraseña" . "'" . $user . "';";
    $getResults= sqlsrv_query($conn, $tsql);

    if ($getResults == FALSE)
        echo (sqlsrv_errors());

    while ($row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_ASSOC)) {
        echo ($row['Nombre'] . " " . $row['Contra'] . "<br/>");
    }
    sqlsrv_free_stmt($getResults);
?>

