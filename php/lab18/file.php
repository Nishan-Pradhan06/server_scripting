<?php
$file = fopen("data.txt", "w");
fwrite($file, "Hello, World!");
fclose($file);



$file = fopen("data.txt", "r");
$content = fread($file, filesize("data.txt"));
fclose($file);
echo $content;




$file = fopen("search.txt", "r");
while (!feof($file)) {
    $line = fgets($file);
    if (trim($line) === "STOP") {
        break;
    }
    echo $line . "<br>";
}
fclose($file);
?>

