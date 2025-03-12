<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width= , initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>
    
    
     <script>
    //Object literal  
    var student={
            name: "Chris",
            age: 21,
            studies: "Computer Science"
        }

        document.getElementById("demo").innerHTML=student.name + " of the age " + student.age + "studies " + student.studies
    </script>

    
    <script>
        // Using new Keyword

        var student = new Object();
        student.name="Raja",
        student.age =22,
        student.studies="Information Technology";
        console.log(student.age)
        document.getElementById("demo").innerHTML=student.name + " of the age " + student.age + " studies " + student.studies

    </script>

    <script>
        //use an object Constructor to create and define a js code
        function stud(name,age,studies)
        {
            this.name =name;
          this.age=age;
           this.studies=studies;
        }
        var student = new stud("Rani",22,"CSBS");
        document.getElementById("demo").innerHTML=student.name + " of the age " + student.age + " studies " + student.studies
    </script>


    
</body>
</html> 
