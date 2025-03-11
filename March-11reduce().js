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

    //reduce()  combine all elements of an array into a single value (like a sum, product, or concatenation).
    // It does not modify the original array but returns a single computed result.
    
    let num4=num1.reduce(add)
    function add(total,value){
        
        return total+value;
    }
    document.getElementById("demo").innerHTML = num4;

    </script>
</body>
</html>
