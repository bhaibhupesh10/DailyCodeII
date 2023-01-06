<?php

$name = $_POST['name'];
$pass = $_POST['pass'];


$user = 'root';
$p = '';
$conn = mysqli_connect('localhost', $user , $p) or die("unable to connect");
$db = mysqli_select_db($conn,'register');

$sql = mysqli_query($conn, "insert into register.reg(Name, Password)VALUES('$name','$pass')");

if($sql){
	echo "<script> alert('reg successful') </script>";
}
else{
	echo "error";
}
?>