<?php
function db_connect() {

    // Define connection as a static variable, to avoid connecting more than once 
    static $conn;

    // Try and connect to the database, if a connection has not been established yet
    if(!isset($conn)) {
        // Load configuration as an array. Use the actual location of your configuration file
        $config = include("/home/screener/Config/config.php"); // Config file URL goes here 
        $conn = mysqli_connect($config->servername,$config->username,$config->password,$config->dbname);
    }

    // If connection was not successful, handle the error
    if($conn === false) {
        // Handle error - notify administrator, log to a file, show an error screen, etc.
        return mysqli_connect_error(); 
    }
    return $conn;
}
?> 

