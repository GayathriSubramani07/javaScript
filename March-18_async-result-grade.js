<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promise Example</title>
</head>
<body>
    <script>
        let result = function(score) {
            return new Promise(function(resolve, reject) { 
                console.log("Calculating results...");
                if (score > 50) {
                    resolve("Congratulations! You have passed.");
                } else {
                    reject("You have failed.");
                }
            });
        };

        let grade = function(response) {
            return new Promise(function(resolve, reject) { 
                console.log("Calculating your grade...");
                resolve("Your grade is A. " + response);
            });
        };

        

        async function calculateResults(){
            try{
                const response = await result(40)
                console.log("Result received")
                const finalgrade = await grade(response)
                console.log(finalgrade)
            }
            catch(error){
                console.log(error)
            }
        }
        calculateResults()

    </script>
</body>
</html>
