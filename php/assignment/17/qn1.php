<!-- Write a PHP script that uses a foreach loop to iterate over an associative array
containing student names as keys and their corresponding grades as values.
Calculate the average grade and display it. -->
<?php
// Associative array with student names and grades
$students = [
    "nishan" => 85,
    "shanti" => 78,
    "nabin" => 92,
];


$totalGrades = 0;


foreach ($students as $name => $grade) {
    echo "$name : $grade <br>";
    $totalGrades += $grade;
}


$average = $totalGrades / count($students);

echo "The average marks obtained is $average";



?>