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
/*$para  = 'coordinador@tesos.co' . ', ';*/
$para = 'tesos.co@gmail.com' . ', ';
$para .= 'andresgiovanni21@hotmail.com';
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
$redirect= "Location:http://www.tesos.co/pago-servicio-telefonico.html?key=".$extra1."\n";

$para2 = $customer_email;
$asunto2 = "Confirmación de registro TESOS.co";
$headers2 = "From:no-reply@tesos.co\r\n";
$headers2 .= "MIME-Version: 1.0\r\n";
$headers2 .= "Content-Type: text/html; charset=UTF-8\r\n";
$email_body2 = '<html><body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">


    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
            <td bgcolor="#FF630a" align="center">
                <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                            <a href="http://litmus.com" target="_blank">
                        </a>
                        </td>
                    </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
            </td>
        </tr>
        <!-- HERO -->
        <tr>
            <td bgcolor="#FF630a" align="center" style="padding: 0px 10px 0px 10px;">
                <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">

                             <h1 style="font-size: 48px; font-weight: 400; margin: 0;">Gracias!</h1>

                        </td>
                    </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
            </td>
        </tr>
        <!-- COPY BLOCK -->
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
            <tr>
            <td align="center" valign="top" width="600">
            <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <!-- COPY -->
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">Apreciado Cliente, Gracias por registrar su solicitud en TESOS.co</p>
                        </td>
                    </tr>

                    <!-- COPY -->
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 0px 30px; color: #666666; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0 0 30px;">Una vez confirmemos el pago uno de nuestros Coordinadores de Zona se contactará con Usted y le llegará en un nuevo mensaje la confirmación del Servicios TESOS.co con el PIN DE SEGURIDAD, el cual debe ser confirmado por el TESO al llegar a su Oficina o Domicilio.</p>
                        </td>
                    </tr>
                    <!-- COPY -->


                        <tr>
                              <td bgcolor="#fffedd" style=" margin-top: 50px; padding: 20px 30px 20px 30px; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 2px;"><strong>Nombre: </strong>'.'   '.$customer_name.'</td>

                         </tr>
                         <tr>
                              <td bgcolor="#ffffff " style="padding: 20px 30px 20px 30px; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 2px;" cellpadding="10"><strong>Email: </strong>'.'   '.$customer_email.'</td>

                         </tr>
                         <tr>
                              <td bgcolor="#fffedd" style="padding: 20px 30px 20px 30px; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 2px;"><strong>Número de teléfono fijo:</strong>'.'   '.$customer_phone.'</td>
                         </tr>

                         <tr>
                              <td bgcolor="#ffffff" style="padding: 20px 30px 20px 30px; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 2px;"><strong>Número de celular:   </strong>'.'   '.$customer_mobile.'</td>
                         </tr>

                         <tr>
                              <td bgcolor="#fffedd" style="padding: 20px 30px 20px 30px; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 2px;"><strong>Ciudad:  </strong>'.'   '.$customer_city.'</td>
                         </tr>

<tr>
                              <td bgcolor="#ffffff" style="padding: 20px 30px 20px 30px; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 2px;"><strong>Descripción:   </strong>'.'   '.$service_description.'</td>
                         </tr>


<!-- COPY -->
                         <tr>
                              <td bgcolor="#ffffff" align="left" style="padding: 30px 30px 20px 30px; color: #666666; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                   <p style="margin: 0;">Muchas gracias.</p>
                              </td>
                         </tr>
                         <!-- COPY -->
                         <tr>
                              <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: "Lato", Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                                   <p style="margin: 0;">Cordialmente,<br>GERENCIA DE SERVICIO TESOS.CO</p>
                              </td>
                         </tr>
                    </table>
                <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
            </td>
        </tr>


    </table>

</body>

</html>
';


mail($para, $asunto, $email_body, $headers);
mail($para2, $asunto2, $email_body2, $headers2);
header($redirect);
?>
