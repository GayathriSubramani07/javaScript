<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width= , initial-scale=1.0">
    <title>Document</title>
    <p id="demo"></p>
</head>
<body>
    
    <script>

        var a=10
        function first(){
            var b=20
            function second(){
                var c=a+b;
                return c;
            }
            return second();
        }
        var doc=first()
        document.write("the sum is "+ doc)

    </script>
</body>
</html>
