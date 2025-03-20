//to-do-list.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App</title>
    <link rel="stylesheet" href="to-do-list.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List ✅</h1>
        <input type="text" id="taskInput" placeholder="Add a new task...">
        <button onclick="addTask()">Add</button>
        <ul id="taskList"></ul>
    </div>
    <script src="to-do-list.js"></script>
</body>
</html>


//to-do-list.css

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
    width: 80%;
    padding: 5px;
}
button {
    padding: 5px 10px;
    margin-top: 10px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
}
ul {
    list-style: none;
    padding: 0;
}
li {
    padding: 10px;
    background: #eee;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}
.done {
    text-decoration: line-through;
    color: gray;
}


//to-do-list.js

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return; // Stop if empty

    let li = document.createElement("li");
    li.textContent = taskText;

    // Add delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Mark task as done
    li.onclick = function () {
        li.classList.toggle("done");
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = ""; // Clear input
}

