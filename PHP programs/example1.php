<html>
    <head>
        <title>example1</title>
        <body>
            <?php
            echo "<h1>ye php ka example vala program hai </h1>";
            echo "<h1>ye php ka example vala program hai </h1>";
            echo "<h1>ye php ka example vala program hai </h1>";
            echo "<h1>ye php ka example vala program hai </h1>";
            echo "<h1>ye php ka example vala program hai </h1>";
            echo "<h1>ye php ka example vala program hai </h1>";
            echo "<h1>ye php ka example vala program hai </h1>";
            echo "<h1>ye php ka example vala program hai </h1>";
            echo "<h1>ye php ka example vala program hai </h1>";
                    ?>
            <?php
            $num1 = 10;
            $num2 = 40;
            $num3 = $num1 + $num2;

            echo $num3;
            echo "<HR>" , var_dump($num1);

            // Increament/Decreament Operators.

            $variable = 5;
            $variable++;
            $variable--;
            ++$variable;
            --$variable;

            echo "<hr>", $variable--, "minus minus -- : &nbsp", $variable, "<br>";
            echo "<br>", ++$variable, $variable,"<br>";   
            echo "<br>", --$variable, $variable,"<br>";   
            echo $variable++, "<br>variable after ++: &nbsp", $variable;
            $myVar = (true and true);
            echo "<br>", var_dump($myVar);
            $myVar = (true and false);
            echo "<br>", var_dump($myVar);
            $myVar = (false and true);
            echo "<br>", var_dump($myVar);
            $myVar = (false and false);
            echo "<br>", var_dump($myVar);
            echo "<hr>";
            $myVar = (true or true);
            echo "<br>", var_dump($myVar);
            $myVar = (true or false);
            echo "<br>", var_dump($myVar);
            $myVar = (false or true);
            echo "<br>", var_dump($myVar);
            $myVar = (false or false);
            echo "<br>", var_dump($myVar);
            echo "<hr>";
            $myVar = (true xor true);
            echo "<br>", var_dump($myVar);
            $myVar = (true xor false);
            echo "<br>", var_dump($myVar);
            $myVar = (false xor true);
            echo "<br>", var_dump($myVar);
            $myVar = (false xor false);
            echo "<br>", var_dump($myVar);

            echo "<hr><hr>";
            $myVar = (true && true);
            echo "<br>", var_dump($myVar);
            $myVar = (true && false);
            echo "<br>", var_dump($myVar);
            $myVar = (false && true);
            echo "<br>", var_dump($myVar);
            $myVar = (false && false);
            echo "<br>", var_dump($myVar);
            echo "<hr>";
            $myVar = (true || true);
            echo "<br>", var_dump($myVar);
            $myVar = (true || false);
            echo "<br>", var_dump($myVar);
            $myVar = (false || true);
            echo "<br>", var_dump($myVar);
            $myVar = (false || false);
            echo "<br>", var_dump($myVar);
            echo "<hr>";
            $myVar = (true != true);
            echo "<br>", var_dump($myVar);
            $myVar = (true != false);
            echo "<br>", var_dump($myVar);
            $myVar = (false != true);
            echo "<br>", var_dump($myVar);
            $myVar = (false != false);
            echo "<br>", var_dump($myVar);
            echo "<hr>";                                                                                                                                                  zs
        ?>
            <?php
           // STRING 
            // INTEGER
            //FLOAT
            // BOOLEAN 
            // ARRAY
            // OBJECT
echo "<br> <hr>"; 
define('PI', 3.14);
$var = "This is a string this is string";
echo var_dump($var);


?>




        </body>
    </head>
</html>