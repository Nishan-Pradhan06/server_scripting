<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="adddata.php" method="post">
        <label for="name">Name:</label>
        <input type="text" name="name" ><br><br>
        <label for="phone">Mobile Number:</label>
        <input type="number" name="phone"> <br><br>
        <input type="submit" value="Save">
    </form>
<hr><hr>
    <?php
include 'createdb.php';
$sql = "SELECT * from info";
$result = mysqli_query($conn, $sql);
if($result){
    while($row = mysqli_fetch_assoc($result)){
        $id = $row['s.n'];
        $name = $row['name'];
        $phone = $row['phone'];


        echo "Name". $name . "<br>";
    }
}

?>
</body>
</html>