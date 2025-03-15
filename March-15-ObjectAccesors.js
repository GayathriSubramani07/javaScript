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

        var car={
            model:"BMW 320d",
            color:"Navy blue",
            fuel_type: "Diesel",
            get fuel(){
                return this .fuel_type
            },
        };
        document.getElementById("demo").innerHTML=car.fuel;
    </script>


<script>

    var car={
        model : "Audi A4",
        color: "Bright Red",
        fuel_type:"",
        set fuel(fuel){
            this.fuel_type =fuel;
        }
    }
    car.fuel="petrol";
    document.getElementById("demo").innerHTML=car.fuel_type;
</script>
</body>
</html>
