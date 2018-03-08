<?php

    // THIS IS NOT DONE, STILL WORKING ON THIS.
    // PUSHING TO REPO SO I CAN MOVE OFF THE COMPUTER
    // I AM CURRENTLY WORKING ON - Danny


    error_reporting(E_ALL); 
    ini_set('display_errors',1);

    $servername = "127.0.0.1";
    $username = "root";
    $password = "jthklo123";
    $dbname = 'websitedb';

    class ReturnObject {
        public $success = false;
        public $movies = [];
    }
    class Movie {
        public $movieTitle = "";
        public $classTitle;
        //public $length <- could be a cool idea
    }

    //Array to hold movies
    $movieArray = [];

    $userID = $_GET["UserId"];



    // Query here (probably should me a stored proc, will look into it)

    // Gets all Classes for User
    // SELECT * FROM EnrolledIn
    // Where StudentId = $userID;

    // Gets all videos for the user for each class code the user has
    // SELECT Video.Title, Video.URL, Class.Title 
    // FROM ClassVideo
    // INNER JOIN Video ON Video.Id = ClassVideo.VideoId
    // INNER JOIN Class ON ClassVideo.ClassID = Class.Id
    // WHERE ClassVideo.ClassId = $ClassIdList
    // And Video.Active = 1;

    $sqlQuery = "";


    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($result = $conn->query($sqlQuery)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $newMovie = new Movie();
            $newMovie->movieTitle = row["movieTitle"];
            $newMovie->URL = row["URL"];
            $newMovie->classTitle = row["classTitle"];

            array_push($movieArray, $newMovie)
            
        }
        // Returning object back to page
        if (count($movieArray) > 0) {
            $returnObj = new ReturnObject();
            $returnObj->success = True;
            $returnObj->movies = $movieArray;
            echo json_encode($returnObj);
        }
        else {
            $returnObj = new ReturnObject();
            echo json_encode($returnObj);
        }

        $result->close();
    }

    mysqli_close($conn);
?>
