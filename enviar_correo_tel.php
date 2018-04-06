<?php

$customer_name= $_POST['Nombre1'];
$customer_email= $_POST['Email1'];
$customer_phone= $_POST['Telefono1'];
$customer_mobile= $_POST['Celular1'];
$customer_city= $_POST['Ciudad1'];
$service_description= $_POST['Descipcion1'];
$service_agreement= $_POST['Acepto1'];
$extra1= $_POST['key-tel'];

$email=  'solicitud.telefonico@tesos.co';
$para  = 'andresgiovanni21@hotmail.com' . ', ';
$para .= 'tesos.co@gmail.com';
$asunto= "Solicitud Servicio # ".$extra1."\n";
$email_body = "customer_name: ".$customer_name."\r\n
customer_email: ".$customer_email."\r\n
customer_phone: ".$customer_phone."\r\n
customer_mobile: ".$customer_mobile."\r\n
customer_city: ".$customer_city."\r\n
service_description: ".$service_description."\r\n
service_agreement: ".$service_agreement."\r\n
service_type: telefonico\r\n
extra1:	".$extra1."\r\n";

$headers= "From:" .$email."\n";
$redirect= "Location:http://www.tesos.co/pago-servicio-telefonico.html?key=" .$extra1."\n";

mail($para, $asunto, $email_body, $headers);
header($redirect);
?>
