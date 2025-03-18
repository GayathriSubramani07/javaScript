<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Define a global variable
        var value = 50;

        function my_function() {
            // Define a local variable inside the function
            var value = 100;

           
            alert("Value: " + value);  // This will show 100 (local variable inside function)

            // Alert the global variable using 'this'
            alert("This value: " + this.value);  
            // Explanation:
            // In a browser environment, 'this' inside a normal function refers to the global object (window).
            // Since 'value' is declared globally with 'var', it becomes a property of the window object.
            // So, 'this.value' refers to window.value, which is 50.
        }

        my_function();
    </script>
</body>
</html>
