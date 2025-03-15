<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="demo"></h1>
    <button id="click me">Click me</button>

    <script>
        let user ={
            name:"chris",
            age:25,
           message:sayHi
        };
        function sayHi(){
            alert("Hello!");
        }
      
        document.getElementById("demo").innerHTML="Hi " + user.name;
        document.getElementById("click me").onclick=user.message;
    </script>
</body>
</html>
