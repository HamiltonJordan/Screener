<?php

// A file that will be located AWAY from the server directory.

// Will return an object array containing the connection values
// to our MySQL Server.  This will make our connection much more
// secure and get our passwords off of github.

// Look at DbConnect.php as a second part of this process.


return (object) array(
    'servername' => "",
    'username' => "",
    'password' => "",
    'dbname' => ""
);

?>
