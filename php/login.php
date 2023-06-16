<?php
$serverName = "ASUSZEPHYRUS\SQLEXPRESS";

$connectionInfo = array( "Database"=>"StarbucksSTSS");
$conn = sqlsrv_connect( $serverName, $connectionInfo);


if( $conn ) {
     echo "Conexión establecida.<br />";
}else{
     echo "Conexión no se pudo establecer.<br />";
     die( print_r( sqlsrv_errors(), true));
}
?>