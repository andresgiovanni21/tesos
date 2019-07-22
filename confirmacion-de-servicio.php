<?php
/*En esta página se reciben las variables enviadas desde ePayco hacia el servidor.
Antes de realizar cualquier movimiento en base de datos se deben comprobar algunos valores
Es muy importante comprobar la firma enviada desde ePayco
Ingresar  el valor de p_cust_id_cliente lo encuentras en la configuración de tu cuenta ePayco
Ingresar  el valor de p_key lo encuentras en la configuración de tu cuenta ePayco
*/
$p_cust_id_cliente = '18322';
$p_key             = 'eb8f585afb16b07bf16d9efeb20574d15e191939';

$x_ref_payco      = $_REQUEST['x_ref_payco'];
$x_id_invoice       = $_REQUEST['$x_id_invoice'];
$x_transaction_id = $_REQUEST['x_transaction_id'];
$x_currency_code  = $_REQUEST['x_currency_code'];
$x_extra1          = $_REQUEST['x_extra1'];
$x_signature      = $_REQUEST['x_signature'];
$signature = hash('sha256', $p_cust_id_cliente . '^' . $p_key . '^' . $x_ref_payco . '^' . $x_transaction_id . '^' . $x_amount . '^' . $x_currency_code);
$x_response     = $_REQUEST['x_response'];
$x_motivo       = $_REQUEST['x_response_reason_text'];
$x_id_invoice   = $_REQUEST['x_id_invoice'];
$x_autorizacion = $_REQUEST['x_approval_code'];
$x_description= $_REQUEST['x_description'];
$x_amount= $_REQUEST['x_amount'];
$x_tax= $_REQUEST['x_tax'];
$x_amount_base= $_REQUEST['x_amount_base'];
$x_currency_code= $_REQUEST['x_currency_code'];
$x_bank_name= $_REQUEST['x_bank_name'];
$x_cardnumber= $_REQUEST['x_cardnumber'];
$x_quotas= $_REQUEST['x_quotas'];
$x_respuesta= $_REQUEST['x_respuesta'];
$x_response= $_REQUEST['x_response'];
$x_approval_code= $_REQUEST['x_approval_code'];
$x_transaction_id= $_REQUEST['x_transaction_id'];
$x_fecha_transaccion= $_REQUEST['x_fecha_transaccion'];
$x_transaction_date= $_REQUEST['x_transaction_date'];
$x_response_reason_text= $_REQUEST['x_response_reason_text'];
$x_errorcode= $_REQUEST['x_errorcode'];
$x_cod_transaction_state= $_REQUEST['x_cod_transaction_state'];
$x_transaction_state= $_REQUEST['x_transaction_state'];
$x_franchise= $_REQUEST['x_franchise'];
$x_extra1= $_REQUEST['x_extra1'];
$x_customer_doctype= $_REQUEST['x_customer_doctype'];
$x_customer_document= $_REQUEST['x_customer_document'];
$x_customer_name= $_REQUEST['x_customer_name'];
$x_customer_lastname= $_REQUEST['x_customer_lastname'];
$x_customer_email= $_REQUEST['x_customer_email'];
$x_customer_phone= $_REQUEST['x_customer_phone'];
$x_customer_country= $_REQUEST['x_customer_country'];
$x_customer_city= $_REQUEST['x_customer_city'];
$x_customer_address= $_REQUEST['x_customer_address'];
$x_customer_ip= $_REQUEST['x_customer_ip'];

$email=  'respuesta.transaccion@tesos.co';
$para  = 'andresgiovanni21@hotmail.com' . ', ';
$para .= 'pagostesos@gmail.com' . ', ';
$para .= 'coordinador@tesos.co';
$asunto= "Transaccion # ".$x_extra1."\n";
$email_body = "ref_payco: ".$x_ref_payco."\r\n
id_invoice: ".$x_id_invoice."\r\n
description: ".$x_description."\r\n
amount: ".$x_amount."\r\n
tax: ".$x_tax."\r\n
amount_base: ".$x_amount_base."\r\n
currency_code: ".$x_currency_code."\r\n
bank_name: ".$x_bank_name."\r\n
cardnumber:	".$x_cardnumber."\r\n
quotas: ".$x_quotas."\r\n
respuesta: ".$x_respuesta."\r\n
response: ".$x_response."\r\n
approval_code: ".$x_approval_code."\r\n
transaction_id:	".$x_transaction_id."\r\n
fecha_transaccion: ".$x_fecha_transaccion."\r\n
transaction_date: ".$x_transaction_date."\r\n
response_reason_text: ".$x_response_reason_text."\r\n
errorcode: ".$x_errorcode."\r\n
cod_transaction_state: ".$x_cod_transaction_state."\r\n
transaction_state: ".$x_transaction_state."\r\n
franchise: ".$x_franchise."\r\n
extra1:	".$x_extra1."\r\n
customer_doctype: ".$x_customer_doctype."\r\n
customer_document: ".$x_customer_document."\r\n
customer_name: ".$x_customer_name." ".$x_customer_lastname."\r\n
customer_email:	".$x_customer_email."\r\n
customer_phone:	".$x_customer_phone."\r\n
customer_country: ".$x_customer_country."\r\n
customer_city: ".$x_customer_city."\r\n
customer_address: ".$x_customer_address."\r\n
customer_ip: ".$x_customer_ip."\r\n";

$headers= "From:" .$email."\n";

mail($para, $asunto, $email_body, $headers);
     //Validamos la firma
if ($x_signature == $signature) {
    /*Si la firma esta bien podemos verificar los estado de la transacción*/
    $x_cod_response = $_REQUEST['x_cod_response'];
    switch ((int) $x_cod_response) {
        case 1:
            # code transacción aceptada
            //echo "transacción aceptada";
            break;
        case 2:
            # code transacción rechazada
            //echo "transacción rechazada";
            break;
        case 3:
            # code transacción pendiente
            //echo "transacción pendiente";
            break;
        case 4:
            # code transacción fallida
            //echo "transacción fallida";
            break;
    }
} else {
    die("Firma no valida");
}
?>
