<!-- Create an HTML form for submitting feedback, including fields for name, email,
and message. Write a PHP script to process the form submission using $_POST
and store the feedback in a database. -->
<?php
$host  = 'localhost';
$user = 'root';
$password = '';
$database = 'feedbackSubmit';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed" . $conn->connect_error);
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $message = $_POST['message'];


    $stmt = $conn->prepare("INSERT INTO feedbackSubmit(name,message) VALUES (?,?)");

    $stmt->bind_param("ss", $name, $message);


    if ($stmt->execute()) {
        echo "Feedback submitted successfully";
    } else {
        echo "Error : " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Submission</title>
</head>

<body>
    <form action="submit_feedback.php" method="POST">
        <label for="name">Enter your name</label>
        <input type="text" name="name" id="name">
        <label for="message">Enter your message</label>
        <input type="text" name="message" id="message">
        <button type="submit">Submit Feedback</button>
    </form>
</body>

</html>