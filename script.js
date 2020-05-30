// global variables
let card = document.querySelector(".card");
let bookTitle = document.querySelector(".book-title");
let bookAuthor = document.querySelector(".book-author");
let bookPages = document.querySelector(".book-pages");
let bookStatus = document.querySelector(".book-status");
let footerButton = document.querySelector(".footer-button");
let exitForm = document.querySelector(".exit-form");
let cardInput = document.querySelector(".card-input");
let formButton = document.querySelector(".form-button");


// form variables
let titleInput = document.getElementById('input-title');
let authorInput = document.getElementById('input-author');
let pagesInput = document.getElementById('input-pages');
let statusInputYes = document.getElementById('input-status1');
let statusInputNo = document.getElementById('input-status2');

// form save data
let savedTitle;
let savedAuthor;
let savedPages;
let savedStatus;



// button functions
exitForm.addEventListener('click', () => {
    cardInput.style.display = "none";
});

footerButton.addEventListener('click', () => {
    cardInput.style.display = "block";
});

// form data sending from user
document.querySelector('form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    savedTitle = titleInput.value;
    savedAuthor = authorInput.value;
    savedPages = pagesInput.value;
    savedStatus = statusInputYes.value;
    
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    statusInputYes = '';
    cardInput.style.display = "none";

    let newCard = new Book(savedTitle, savedAuthor, savedPages, savedStatus);
    newCard.createCard();
});


// main object
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    

    this.createCard = function() {
        if (this.status == 'yes') {
            this.status = 'Read';
        } else {
            this.status = 'Not read';
        };

        document.querySelector("main").innerHTML += 
        `<div class="card">
        <p class="book-title">${this.title}</p>
        <p class="book-author">${this.author}</p>
        <p class="book-pages">${this.pages}</p>
        <p class="book-status">${this.status}</p>
    </div>`;
    };
};


