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
        
    //filter()  creates a new array with only the elements that pass a given condition. It does not modify the original array.
    //filter() must always return a boolean value 

                let  num1=[2,3,4,5,6,7]
                let num3 =num1.filter(comp);
                function comp(value){
                    return value>4;
                }

                document.getElementById("demo").innerHTML = num3;

    </script>
</body>
</html>
