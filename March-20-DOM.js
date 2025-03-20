//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Time</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>

</head>
<body>
    <div id="wrapper">
        <header>
            <div id="page-banner">
                <h1 class="title" style="color: #fff;">Movie Time</h1>
                <p style="color: #fff;">A curated list of Most Amazing Movies !</p><br>
            </div>
        </header>
        <div id="movie-list">
            <h2 class="title">Movies To Watch</h2>
            <ul>
                <li>
                    <span class="name">Amaran</span>
                    <span class="delete">Delete</span>
                </li>
                <li>
                    <span class="name">Alangu</span>
                    <span class="delete">Delete</span>
                </li>
                <li>
                    <span class="name">Sorgavaasal</span>
                    <span class="delete">Delete</span>
                </li>
                <li>
                    <span class="name">Jolly O Gymkhana</span>
                    <span class="delete">Delete</span>
                </li>
                <li>
                    <span class="name">Aaragan</span>
                    <span class="delete">Delete</span>
                </li>
            </ul>
        </div>
        <form id="add-movie">
            <input type="text" placeholder="Add a new Movie.."/>
            <button>Add</button>
        </form>
    </div>
</body>
</html>



//style.css
/* Apply background */
body {
    font-family: Arial, sans-serif;
    background: url('auditorium-1.webp') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Wrapper styles */
#wrapper {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
    text-align: center;
}

/* Header styles */
#page-banner {
    background: black;
    padding: 20px;
    border-radius: 10px 10px 0 0;
}

#page-banner h1,
#page-banner p {
    margin: 0;
}

/* Movie list */
#movie-list {
    padding: 20px;
}

#movie-list h2 {
    text-align: left;
    margin-bottom: 10px;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    display: flex;
    justify-content: space-between;
    background: #f5f5f5;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
}

.delete {
    background: red;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}

/* Input and button styles */
#add-movie {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

#add-movie input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#add-movie button {
    background: green;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}


//script.js
document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;  // Ensure 'forms' is defined inside the DOMContentLoaded event

    // Delete movie
    list.addEventListener('click', (e) => {
        if (e.target.className === 'delete') {
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        }
    });

    // Add movie
    const addform = forms['add-movie'];
    addform.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get input value
        const value = addform.querySelector('input[type="text"]').value;
        if (value.trim() === "") return; // Prevent adding empty movies

        // Creating elements
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // Add text content
        movieName.textContent = value;
        deleteBtn.textContent = 'Delete';

        // Add class names for styling
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        // Append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        // Clear input field after adding
        addform.querySelector('input[type="text"]').value = "";
    });
});
