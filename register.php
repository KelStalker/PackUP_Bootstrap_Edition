<?php
/* this code templated from: https://docs.google.com/document/d/1edoTeHeF7CwlUsVriMkO9ZNAuiC4oJmQAyLvomhK-CI/edit
Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */

// local server connect string
// $link = mysqli_connect("localhost", "root", "46c62c7d-f0cf-468d-a4b4-f1b0fd741540", "packup");
// crocweb connect string
// $link = mysqli_connect("localhost", "root", "f0cf-468d-a4b4", "getpacku_packup");
$link = mysqli_connect("104.152.168.15", "root", "f0cf-468d-a4b4", "getpacku_packup");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$first_name = mysqli_real_escape_string($link, $_REQUEST['first_name']);
$last_name = mysqli_real_escape_string($link, $_REQUEST['last_name']);
$email = mysqli_real_escape_string($link, $_REQUEST['email']);
 
// Attempt insert query execution
$sql = "INSERT INTO register (fname, lname, email) VALUES ('$first_name', '$last_name', '$email')";
if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>