<?php
 $username = "jordan";
$password = "jthklo123";
$hostname = "localhost"; 
phpinfo();
//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) 
  or die("Unable to connect to MySQL");
echo "Connected to MySQL<br>";
?>
