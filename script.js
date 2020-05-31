// global variables
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
let statusInput;

let form = document.querySelector('form');


// form save data
let savedTitle;
let savedAuthor;
let savedPages;
let savedStatus;

// card counter
let cardCounter = 1;



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

    statusInput = document.querySelector('input[type="radio"]:checked').value;

    savedTitle = titleInput.value;
    savedAuthor = authorInput.value;
    savedPages = pagesInput.value;
    savedStatus = statusInput;

    
    let newCard = new Book(savedTitle, savedAuthor, savedPages, savedStatus);
    newCard.createCard();
    

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    statusInput = '';
    cardInput.style.display = "none";

    

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
        `<div class="card" id="card${cardCounter}">
        <div class="card-exit" id="card-exit${cardCounter}" onclick="removeCard(${cardCounter})">X</div>
        <p class="book-title">${this.title}</p>
        <p class="book-author">${this.author}</p>
        <p class="book-pages">${this.pages}</p>
        <p class="book-status">${this.status}</p>
        </div>`;
        

        cardCounter++;
        
        
    };
};

// function to remove cards
function removeCard(number) {
    document.getElementById(`card${number}`).remove();
}