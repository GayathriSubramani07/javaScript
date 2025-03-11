<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>
    <script>


    //Map() when you need to create a new array from an existing array by applying a transformation to each element.
    //It does not modify the original array.
    //It returns a new array with transformed values.


                let  num1=[2,3,4,5,6,7]
                let num2 =num1.map(multiply)
                function multiply(value){
                    return value*2
                }
                document.getElementById("demo").innerHTML = num2;

    </script>
</body>
</html>
