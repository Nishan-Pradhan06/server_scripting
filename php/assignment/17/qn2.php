<!-- Define a PHP function called "calculateCircleArea" that takes the radius of a circle
as a parameter and returns its area. Test this function with various radius values. -->
<?php

function calculateCircleArea($radius)
{
    if ($radius < 0) {
        return "Radius must be positive";
    } else {
        return pi() * pow($radius, 2);
    }
}

$testRadis = [1, -2, 3, 45];

foreach ($testRadis as $radis) {
    echo "Radius : $radis , Area :", calculateCircleArea($radis) . " <br>";
}
?>