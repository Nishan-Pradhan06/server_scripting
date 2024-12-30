<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="image">
        <input type="submit" value="Upload">
    </form>
</body>

</html>
<?php
if (isset($_FILES['image'])) {
    $allowed_types = ['image/png', 'image/jpeg', 'image/gif'];
    $max_size = 2 * 1024 * 1024; // 2 MB

    $file_name = $_FILES['image']['name'];
    $file_temp = $_FILES['image']['tmp_name'];
    $file_size = $_FILES['image']['size'];
    $file_type = $_FILES['image']['type'];

    if (!in_array($file_type, $allowed_types)) {
        echo "Error: Only PNG, JPG, and GIF files are allowed.";
    } elseif ($file_size > $max_size) {
        echo "Error: File size must be less than 2 MB.";
    } else {
        if (move_uploaded_file($file_temp, "upload-images/" . $file_name)) {
            echo "File uploaded successfully.";
            echo "<img src='upload-images/$file_name' alt='Uploaded Image'/>";
        } else {
            echo "Error: There was a problem uploading your file.";
        }
    }
}


// if (isset($_FILES['image'])) {
//     echo "<pre>";
//     print_r($_FILES['image']);
//     echo "</pre>";

//     $file_name = $_FILES['image']['name'];
//     $file_temp = $_FILES['image']['tmp_name'];

//     if (move_uploaded_file($file_temp, "upload-images/" . $file_name)) {
//         echo "File upload sucessfully....";
//         echo "<img src='upload-images/$file_name'/>";
//     }
// }
?>