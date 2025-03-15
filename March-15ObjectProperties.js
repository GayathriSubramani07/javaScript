<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head> 

<body>
    <p id="demo"></p>
  
    <Script> 
        var student={
            name: "Chris",
            age: 22,
            studies: "Computer Science"
        };
        student.name="Gayathri"  //update
        student.id=101 //insert
        delete student.age //delete
       
        document.getElementById("demo").innerHTML=student.name + " of the age " + student.age + " studies " + student.studies +" "+ student.id
    </Script>
</body>
</html>  
