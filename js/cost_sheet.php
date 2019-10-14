<?php
   if(isset($_POST['submit'])){
		
		$email=$_POST['email'];
        $phone=$_POST['phone'];
        
		$to='livexcellence1@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='prestige Waterford leeds';
		$message="Phone :".$phone;
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you , We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>