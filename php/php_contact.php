<?php
if(isset($_POST['submit'])){

	$emailSend = "carma.cgm@gmail.com";
	$from = $_POST['email'];
	$firstName = $_POST['fname'];
	$lastName = $_POST['lname'];
	$title = "Msn for " . $firstName ."(curriculum)";
	$subject = $_POST['subject'];
	$header = "From: " . $firstName . " " . $lastName . "\n" . "Email: " . $from;
	$message = $firstName . " " . $lastName . " following " . "email: ". $from . "\n\n" . $subject;
	mail($emailSend,$title,$message);
	echo "Mail sent. thank you." . $firstName . ", we will contat you shortly";
	header("Location: contact.htm");
	exit;
}
?>
