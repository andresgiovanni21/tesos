<?php

$customer_name= $_POST['Nombre2'];
$customer_email= $_POST['Email2'];
$customer_phone= $_POST['Telefono2'];
$customer_mobile= $_POST['Celular2'];
$customer_city= $_POST['Ciudad2'];
$customer_address1= $_POST['Direccion1'];
$customer_address2= $_POST['Direccion2'];
$service_day= $_POST['Dia'];
$service_month= $_POST['Mes'];
$service_year= $_POST['A-o'];
$service_hour= $_POST['Hora'];
$service_minute= $_POST['Minuto'];
$service_ampm= $_POST['ampm'];
$service_description= $_POST['Descripcion2'];
$service_agreement= $_POST['Acepto2'];
$extra1= $_POST['key-dom'];

$email=  'solicitud.domicilio@tesos.co';
$para  = 'andresgiovanni21@hotmail.com' . ', ';
$para .= 'tesos.co@gmail.com';
$asunto= "Solicitud Servicio # ".$extra1."\n";
$email_body = "customer_name: ".$customer_name."\r\n
customer_email: ".$customer_email."\r\n
customer_phone: ".$customer_phone."\r\n
customer_mobile: ".$customer_mobile."\r\n
customer_city: ".$customer_city."\r\n
customer_address1: ".$customer_address1."\r\n
customer_address2: ".$customer_address2."\r\n
service_time: ".$service_year."-".$service_month."-".$service_day." ".$service_hour.":".$service_minute.":00 ".$service_ampm."\r\n
service_description: ".$service_description."\r\n
service_agreement: ".$service_agreement."\r\n
service_type: domicilio\r\n
extra1:	".$extra1."\r\n";

$headers= "From:" .$email."\n";
$redirect= "Location:http://www.tesos.co/pago-servicio-domicilio.html?key=" .$extra1."\n";

mail($para, $asunto, $email_body, $headers);
header($redirect);
?>
