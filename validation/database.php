<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "php_validation";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    // Custom error messages based on the error code
    $errorMessage = "Oops! Something went wrong. Please try again later.";

    if ($conn->connect_errno === 1049) {
        $errorMessage = "The database 'php_validation' does not exist. Please check the database name.";
    } elseif ($conn->connect_errno === 1045) {
        $errorMessage = "Access denied. Please check your username and password.";
    } elseif ($conn->connect_errno === 2002) {
        $errorMessage = "Could not connect to the database server. Please check the hostname.";
    }

    // Display the error message using SweetAlert2
    echo "<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>";
    echo "<script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                icon: 'error',
                title: 'Connection Failed',
                text: '$errorMessage',
                confirmButtonText: 'OK'
            });
        });
    </script>";
} else {
    // Database connection successful
    echo "<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>";
    echo "<script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                icon: 'success',
                title: 'Database Connected!',
                text: 'Connection to the database was successful.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
        });
    </script>";
}
