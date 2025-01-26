<?php
if (isset($_GET['fname']) && isset($_GET['lname'])) {
    $fname =   $_GET['fname'];
    $lname =   $_GET['lname'];
    $fullname = $fname . " " . $lname;
    echo "Hello," . $fullname . " Welcome to AJAX Workshop!!!";
} else {
    echo "Please enter your first name and last name";
}
