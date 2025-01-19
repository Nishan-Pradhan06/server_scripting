<?php
$file = fopen("essay.txt", "r");
$wordCount = 0;
$word = '';

while (($char = fgetc($file)) !== false) {
    if (ctype_space($char)) {
        if ($word !== '') {
            $wordCount++;
            $word = '';
        }
    } else {
        $word .= $char;
    }
}

if ($word !== '') $wordCount++;

fclose($file);
echo "Total words: " . $wordCount;
