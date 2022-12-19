<!DOCTYPE html>
<html>
<body>
<div class="class">ye part html ka hai let se kya hota hai dekhte hai   
    <?php
    echo "this is first php page ha <br>";
    echo "<hr>";
    echo "ha ye kam to kar hi rha hai na be bro";
    echo "<hr>";
?>

<?php 
// variables in PHP 
// $variable1 = 5;
// $variable2 = 10;

// echo $variable1;
// echo $variable2;
// echo "<br>";
// echo $variable1 + $variable2;
// echo "<br>";

?>
<?php 
//OPERATORS IN PHP
    /* 1. ARIGHTMETIC OPERATORS
        2. Assignment operators
        3. Comparision operators
        4. Increament/Decreament Operators
        5. Logical operator.
        */

        //Arithmetic operators
// echo "the value of variable1 and variable2 is: ";
// echo $variable1 + $variable2;
// echo "<br>";


// // ASSIGNEMENT OPERATORS 
// $newVar = $variable1;
// echo "The value of new variable is ";
// echo $newVar;
// echo "<br>";

// echo "newVar +=1:";
// $newVar += 1;
// echo $newVar;

// echo "<br>";
// echo " -=";
// $newVar -= 1;
// echo $newVar;
echo "<br>";
echo "<hr>";
//COMPARISON OEPRATOR
    // Boolean ko writtern karte hai 
echo "The value of 1==4 is:";
echo var_dump(1 == 4);

echo "<br>the value of 1!=4 is: ";
echo var_dump(1 != 4);

echo "<br>the value of 1>=4 is: ";
echo var_dump(1 >= 4);
echo var_dump(1 != 4);

echo "<br>the value of 1>=4 is: ";
echo var_dump(1 <= 4);

echo "<br>the value of 1>=4 is: ";
echo var_dump(1 == 4);

// Increament/ Decreament Operators
$variable1=4;
$variable1++;
$variable1--;

++$variable1;
--$variable1;

echo "<br> variable1++       :  ";
echo $variable1++,     " =";
echo $variable1;

echo "<br> variable1--        :    ";
echo $variable1-- , "--", $variable1;


echo "<br> ++variable1         :      ";
echo ++$variable1, "=" , $variable1;

echo "<br> ++variable1          :   ";
echo --$variable1, "=", $variable1;
?>

<?php
//LOGICAL OPERATORS
$myVar = (true and false);
echo "<br>", "myVar= ",var_dump($myVar);

$myVar = (true and true);
echo "<br>", "myVar= ", var_dump($myVar);
echo $myVar;
echo  "<br>", var_dump($myVar);

//OR OPERATORS
$myVar = (true or false);
echo "<br>", $myVar, "<br>", var_dump($myVar);
//XOR OPERATORS
$myVar = (true xor false);
echo "<br>", $myVar, "<br>", var_dump($myVar);

?>
</div>



</body>
</html>