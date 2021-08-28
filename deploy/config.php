<?php
	$host = "localhost";
       $user  = "u469015530_gauravcrd";
        $pass = "crd@gaurav";
        $db= "u469015530_swacch_db";
        
        $connection = mysqli_connect( $host, $user, $pass, $db); 
	if( mysqli_connect_error()){
		echo "DB Error!";
		exit;
	}
        
?>