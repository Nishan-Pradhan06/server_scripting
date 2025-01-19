<?php
echo "Server's IP Address: " . $_SERVER['SERVER_ADDR'] . "<br>";
echo "Server's Name: " . $_SERVER['SERVER_NAME'] . "<br>";
echo "Server's Software: " . $_SERVER['SERVER_SOFTWARE'] . "<br>";



$x = 10;

function test() {
    $y = 20;
    $GLOBALS['z'] = $GLOBALS['x'] + $y;
}

test();
echo "Sum of x and y: " . $z;



echo "Current Date and Time (YYYY-MM-DD HH:MM:SS): " . date("Y-m-d H:i:s") . "<br>";
echo "Formatted Date: " . date("l, F d, Y");
?>

