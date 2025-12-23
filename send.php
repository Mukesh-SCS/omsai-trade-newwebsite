<?php 
#--- Send mails to
$_to = 'info@omsai-trade.com';
$_formpage = 'enquiry.htm';
$Appname = 'Om Sai Trade Concern';
#--- Now Code
$_message = 'Sorry, there was an unexpected error!<br />Please try again later.';

	if(!empty($_POST['Email'])){
	  $_name = $_POST['Name'];
	  $_email = $_POST['Email'];
	  $_subject = "Mail From {$Appname} : ";
	#--- Check for Attack[s]
	  $_hackers = array("content-type:", "mime-version:", "multipart/mixed", "bcc:", "cc:");
	  foreach($_POST as $k => $v){
		$v = strtolower($v);
		foreach($_hackers as $_hacker){
		  if(substr_count($v, strtolower($_hacker)) > 0){
			$_message = 'Illegal charactors in input, cannot send Email!';
		  }
		}
	  }
	  if(!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $_email)) {
		$_message = 'Invalid Email Address!<br />Email Address must be in the format you@server.ext';
	  }
	#--- Prepare Headers for the Mail
	  $_header  = "MIME-Version: 1.0\r\n";
	  $_header .= "Content-type: text/html; charset=iso-8859-1\r\n";
	  $_header .= "From: {$_name} <{$_email}>\r\n";
	  $_header .= "Reply-To: \"{$_name}\" <{$_email}>\r\n";
	  $_header .= "Return-Path: \"{$_name}\" <{$_email}>\r\n";
	  $_header .= "X-Mailer: PHP v".phpversion();
	#--- Prepare the Body of the Message
	  $_body = "The following details where submitted by a Website visitor!<br /><br />&nbsp;&nbsp;";
	  $_i = 0;
	  foreach($_POST as $k => $v){
		if(empty($v) || $k == $v || strtolower($k) == 'phpsessid' || substr(strtolower($k), 0, 6) == 'submit'){ continue;}
		$k = str_replace('_', ' ', $k);
		if($k != 'security code')
		{
			$_body .= (++$_i.'. '.htmlentities($k)." &nbsp;&nbsp;: ".htmlentities($v)."<br />&nbsp;&nbsp;");
		}
	  }
	#  $_message = "<p align=\"left\">To : ".htmlentities($_to)."<br /><br />Subject : ".htmlentities($_subject)."<br /><br />Header: ".htmlentities($_header)."<br /><br />Message: ".$_body."</p>";
	#--- Send the mail and Output the result
	 $_i = @mail($_to, $_subject, '<p align="justify">'.$_body.'</p>', $_header);
	  
	  if($_i){
	  	
		$_message = '<p align="center">Thank you! <br />Your message has been submitted successfully. <br />We will get in touch with you soon!</p>';
	  }
	  else{
	  	
		$_message = '<p align="center">Sorry, there was an unexpected error!<br />Please try again later............</p>';
	  }
	}

#---
ob_start();
require_once($_formpage);
$page = ob_get_clean();
$_message = "<p align=\"center\">$_message</p>";
echo eregi_replace("<form[^>]*>(.*)</form>", $_message, $page);
#---
?>