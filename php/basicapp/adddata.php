<?php
//print_r($_POST);

include 'createdb.php';

$n = $_POST['name'];
$p = $_POST['phone'];

$sql = "INSERT INTO info (name, phone) VALUES ('$n','$p')";
 $result = mysqli_query($conn,$sql);
 if($result){
    header("Location:basicapp.php");
  //  echo "Data inserted successfully";
 }else{
    echo "Error :". mysqli_error();
 }

?>