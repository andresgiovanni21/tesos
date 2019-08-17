<?php
    define("HOSTNAME", "localhost");
    define("USERNAME", "teraton2_tDBTeso");
    define("PASSWORD","Tes0s1234");
    define("DBNAME","teraton2_tesos");

    $con = mysqli_connect(HOSTNAME, USERNAME,PASSWORD,DBNAME);

    if($con){
         echo "<script>console.log('connected to DB');</script>";
    }

?>
