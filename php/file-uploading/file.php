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
    echo "<pre>";
    print_r($_FILES['image']);
    echo "</pre>";

    $file_name = $_FILES['image']['name'];
    $file_temp = $_FILES['image']['tmp_name'];

   if( move_uploaded_file($file_temp, "upload-images/" . $file_name))
   {
    echo "File upload sucessfully....";
    echo "<img src='upload-images/$file_name'/>";
   }
    
}
?>