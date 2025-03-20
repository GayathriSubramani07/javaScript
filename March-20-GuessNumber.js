//GuessNumber.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the Number</title>
    <link rel="stylesheet" href="GuessNumber.css">
</head>
<body>
    <div class="container">
        <h1>🎯 Guess the Number! 🎯</h1>
        <p>Guess a number between 1 and 100</p>
        <input type="number" id="userGuess" placeholder="Enter your guess...">
        <button onclick="checkGuess()">Submit</button>
        <p id="message"></p>
    </div>
    <script src="GuessNumber.js"></script>
</body>
</html>


//GuessNumber.css

body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
}
.container {
    width: 300px;
    margin: auto;
    background: white;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}
input {
    padding: 5px;
    width: 80%;
}
button {
    padding: 5px 10px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;
}

//GuessNumber.js

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let userGuess = document.getElementById("userGuess").value;
    let message = document.getElementById("message");

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message.textContent = "⚠️ Enter a number between 1 and 100!";
        return;
    }

    if (userGuess < randomNumber) {
        message.textContent = "🔽 Too low! Try again.";
    } else if (userGuess > randomNumber) {
        message.textContent = "🔼 Too high! Try again.";
    } else {
        message.textContent = "🎉 Correct! You win!";
        message.style.color = "green";
    }
}
