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
    //Array

        let cars=["bmw","volvo","honda"];
        document.getElementById("demo").innerHTML=cars


    //To find length of the array

        let len=cars.length;
        document.getElementById("demo").innerHTML=len

    //To find the last element in the array

        let last = cars[cars.length-1];
        document.getElementById("demo").innerHTML=last;

    //Methods of Array forEach()

        cars.forEach((x,y,z) => {console.log(x,y);});

    //toString()

        document.getElementById("demo").innerHTML=cars.toString();
        
    //pop() Remove the last elementnfrom an array

        let last1=cars.pop();
        let lastv=cars[cars.length-1]
        document.getElementById("demo").innerHTML=lastv
        console.log(lastv)

        let length2=cars.length;
        document.getElementById("demo").innerHTML=length2; 
        console.log(last1)

    //push() Add a new element at the end of an array
       
       cars.push("Audi")
       document.getElementById("demo").innerHTML=cars; 

    //shift() Remove the first element from an array

       cars.shift();
       document.getElementById("demo").innerHTML=cars; 
       
    //unshift() Add an element at the beginning  of an array

       cars.unshift("Hyundai")
       document.getElementById("demo").innerHTML=cars; 

    //concat() create a new array by merging existing array

       let bikes=["yamaha","suzuki","royal enfield"];
       let c=cars.concat(bikes);
       document.getElementById("demo").innerHTML = c;

    //sort() sort an array in ascending order

       c.sort();
       document.getElementById("demo").innerHTML = c;

    //reverse() Reverse the element of an array
        
        c.reverse();
        document.getElementById("demo").innerHTML = c;

    

    </script>
</body>
</html>
