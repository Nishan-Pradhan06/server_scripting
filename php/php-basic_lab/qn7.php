<!--  Create a numeric array containing the names of five countries. Display the array
elements using a loop.-->

<?php
$countries = ["Nepal", "India", "USA", "Australia", "Japan"];
for ($i = 0; $i < count($countries); $i++) {
    echo "$countries[$i]
";
}

?>