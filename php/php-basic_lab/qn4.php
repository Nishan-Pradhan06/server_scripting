<!-- Write a PHP script to demonstrate the usage of logical operators with conditional
statements.
 -->
<?php
$age = 25;
$isCitizen = true;

if ($age >= 18 && $isCitizen) {
    echo "$age<br>";
    echo "Eligible to vote\n";
} else {
    echo "$age";
    echo "Not eligible to vote\n";
}
