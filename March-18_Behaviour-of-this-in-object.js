<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <script>
        var value=50
        function my_function(){
            var value=100
            alert("value : "+value)//100
            alert("This value : "+this.value) //50
        }
        my_function()
    </script>
    <!-- Inside an object method, this refers to the object itself, so it prints the local property.
        Inside  a normal function (without an object), this refers to the global object (window in browsers) -->

    <script>
        const random ={
            name:"john",
            info(){
                console.log("Hi my name is "+this.name)
            }

        }
        random.info();
    </script>
        <script>
         const randoms ={
            name:"Tutorial",
            video:["javascript","this","keyword"],
            info(){
                this.video.forEach(function(tag){
                console.log(tag)
            })
        }

        }
        randoms.info();
        
    </script>
</body>
</html>
