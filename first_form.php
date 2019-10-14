<?php
   if(isset($_POST['submit'])){
		
		$email=$_POST['firstE'];
        $phone=$_POST['firstP'];
        $name=$_POST['firstN'];
		$to='livexcellence1@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='prestige Waterford leeds';
		$message="Phone :".$phone, "Name :".$name;
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you $name, We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>