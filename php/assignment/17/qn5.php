<!-- 1. Create a script that asks the user for their name and stores it in a session
variable upon form submission.
2. If the user’s name is not in the session, display a form to ask for their name.
3. Use a cookie to remember if the user has previously visited the site. On
subsequent visits, greet them with a message like: "Welcome back, [Name]! It’s
great to see you again!"

5. Create an HTML form for user login with fields for username and password. Write a PHP
script to process the form using $_POST. If the username and password match a predefined
value, display a "Login Successful" message; otherwise, show "Invalid Credentials." -->
<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_SESSION['name'] = $_POST['name'];


    setcookie('name', $_POST['name'], time() + (7 * 24 * 60 * 60));
    header("Location" . $_SERVER['PHP_SELF']);

    exit();
}



if (isset($_COOKIE['name'])) {
    echo "Welcome back " . htmlspecialchars($_COOKIE['name']) . " It's great to see you again";
} else if (isset($_SESSION['name'])) {
    echo "Hello " . htmlspecialchars($_SESSION['name']) . " !!";
} else {
    echo '<form method="POST">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name" required>
        <button type="submit">Submit</button>
      </form>';
}
?>