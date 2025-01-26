<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'ajax';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$product = "SELECT * FROM products";
$result = mysqli_query($conn, $product);

if (mysqli_num_rows($result) > 0) {
    // Start the table with inline styles for better appearance
    echo "<h2 style='text-align: center; color: black;'>Available Products</h2>";
    echo "<table style='width: 100%; max-width: 600px; margin: 20px auto; border-collapse: collapse; background: #f9f9f9; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);'>";
    echo "<thead>";
    echo "<tr style='background: #007bff;'>";
    echo "<th style='padding: 12px 15px; text-align: left; color: white;'>Name</th>"; // Header text color is white
    echo "<th style='padding: 12px 15px; text-align: left; color: white;'>Price</th>"; // Header text color is white
    echo "</tr>";
    echo "</thead>";
    echo "<tbody>";

    // Loop through the results and display each row
    while ($row = mysqli_fetch_assoc($result)) {
        $name = $row['name'];
        $price = $row['price'];
        echo "<tr style='border-bottom: 1px solid #ddd; transition: all 0.3s ease;'>";
        echo "<td style='padding: 12px 15px; color: black;'>$name</td>"; // Text color is black
        echo "<td style='padding: 12px 15px; color: black;'>$price</td>"; // Text color is black
        echo "</tr>";
    }

    echo "</tbody>";
    echo "</table>";
} else {
    echo "<p style='text-align: center; color: black; font-size: 18px; margin-top: 20px;'>No products available</p>";
}
