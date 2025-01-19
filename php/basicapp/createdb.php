<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$database_name= "mydb";


//create connection....
$conn = mysqli_connect($servername, $username, $password, $database_name);
if(!$conn){
    die("Connection Failed:". mysqli_connect_error());
}
?>