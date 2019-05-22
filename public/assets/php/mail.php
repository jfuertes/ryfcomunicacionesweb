<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer;

$mail->CharSet = 'UTF-8';

// You must have sendmail installed on your server
$mail->IsSMTP( );

// For SMTP
//$mail->SMTPDebug = 2;                                 // Enable verbose debug output
//$mail->isSMTP();                                      // Set mailer to use SMTP
//$mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
//$mail->SMTPAuth = true;                               // Enable SMTP authentication
//$mail->Username = 'user@example.com';                 // SMTP username
//$mail->Password = 'secret';                           // SMTP password
//$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
//$mail->Port = 587;                                    // TCP port to connect to

//Attachments
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

$mail->setFrom( 'from@mail.com', 'Your Name' );
$mail->addAddress( 'to@mail.com' );
$mail->isHTML( true );
$mail->Subject  = 'Mail from One@solutation';
$mail->Body    	= 'Name: ' . $_POST[ 'name' ] . ' <br>E-mail: ' . $_POST[ 'email' ] . ' <br>Message: ' . $_POST[ 'message' ];
if( !$mail->send( ) )
{
	$out['message'] = 'Message was not sent.';
	$out['status'] = false;
	$out['error'] = 'Mailer error: ' . $mail->ErrorInfo;
}
else
{
	$out['message'] = 'Message has been sent.';
	$out['status'] = true;
}

echo json_encode( $out );

?>