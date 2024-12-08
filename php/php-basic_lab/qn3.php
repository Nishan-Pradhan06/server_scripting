<!-- write a php scrpit that swaps the values of two variables without using a temporary variable -->

<?php
$x = 10;
$y = 20;

echo "value before swaping x=$x\n, y=$y<br>";
$x = $x + $y;
echo "x=$x <br>";
$y = $x - $y;
echo "y=$y <br>";
$x = $x - $y;
echo "x=$x <br>";
echo "value after swaping x=$x\n, y=$y";
