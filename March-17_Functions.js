<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>

<!-- function Declaration-->

<script>

    function my_function(val){
            document.getElementById("demo").innerHTML=val*val;
    }
     my_function(5)
</script>

<!-- function Expression-->

<script>
    let x=function(){
    alert("Hello")
    }
    let y=x()   
    document.getElementById("demo").innerHTML =x()

</script>

<!-- function Constructor--> 

<script>
    var MyFunction = new Function("a","b","return a+b")
    var z=MyFunction(2,3)
    document.getElementById("demo").innerHTML = "The sum is = "+ z
</script>

<!-- Self-invoke function -->

<script>
    (function (){
        alert("Hello...Welcome")
    })()
</script>

<!-- function as value -->

<script>
    function prod(a,b){
    return a*b
    }
    let s=prod(2,5)*5

    document.getElementById("demo").innerHTML = "The product is = "+ s

</script> 

<!--function as object -->

<script>
    var body="return Math.PI *rad *rad "
    var circle =new Function("rad",body);
    alert(circle(5))
</script>

<!--Arrow  function -->

<script>
    const My_fun =(a,b,c) =>{return a*b*c}
    let product =My_fun(2,3,4);
    document.getElementById("demo").innerHTML = "The Product is = "+ product  

</script>

<!-- Generator  function -->

<script>

    function * generatefunc(){
        yield 1;
        yield 2;
        return 3;
    }
    let generator = generatefunc()
    let one =generator.next()
    let two =generator.next()
    let three =generator.next()
    alert(JSON.stringify(one))
    alert(JSON.stringify(two))
    alert(JSON.stringify(three))
</script>



   
</body>
</html>
