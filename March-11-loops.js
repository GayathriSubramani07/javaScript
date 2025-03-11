<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loop</title>
</head>
<body>
    <script>
    //for loop

    for(let x=0;x<5;x++)
    {
        console.log(x)
    }

    //while loop

    let i=1;
    while(i<5)
    {
        console.log(i)
        i++;
    }

    //Do-While loop

    let y=5;
    do{
        console.log(y);
        y++                  
    }
    while(y<10)

    //Breaking out of loop

    let z;
    for(z=0;z<=10;z++)
    {
        console.log(z)
        if(z==5)
    {
        break
    }
    }

    //Skipping a loop cycle

    let a;
    for(a=0;a<=10;a++)
    {
        
        if(a==3)
        continue
        console.log(a);
        
    }
    
    </script>
</body>
</html>
