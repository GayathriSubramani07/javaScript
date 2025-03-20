<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

function playGame(userChoice) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log("You: " + userChoice);
    console.log("Computer: " + computerChoice);

    if (userChoice === computerChoice) {
        console.log("It's a tie! 😐");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! 🎉");
    } else {
        console.log("Computer wins! 😭");
    }
}

// Example usage
playGame("rock"); // Try with "paper" or "scissors" too!

    </script>
</body>
</html>
