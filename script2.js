// global variables
let bookTitle = document.querySelector(".book-title");
let bookAuthor = document.querySelector(".book-author");
let bookPages = document.querySelector(".book-pages");
let bookStatus = document.querySelector(".book-status");
let footerButton = document.querySelector(".footer-button");
let exitForm = document.querySelector(".exit-form");
let cardInput = document.querySelector(".card-input");
let formButton = document.querySelector(".form-button");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };


// form variables
let titleInput = document.getElementById('input-title');
let authorInput = document.getElementById('input-author');
let pagesInput = document.getElementById('input-pages');
let statusInput;

let form = document.querySelector('form');

let storageArray = [];
let storageValue;
let storageCreator = [];

let counter = 0;
let counterInit;


// init function
function init() {
    if (localStorage.length != 0) {

        // counterInit = 0;

        for (let s = 0; s < 1000; s++) {
            if (localStorage.getItem(`newCard${counter}`)) {
                storageCreator = JSON.parse(localStorage.getItem(`newCard${counter}`));

                let newCard = new Book(storageCreator[0], storageCreator[1], storageCreator[2], storageCreator[3]);
                newCard.createCard();
            }

            counter++;
        }
    };
};

init();

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

    // local storage
    storageArray.push(titleInput.value);
    storageArray.push(authorInput.value);
    storageArray.push(pagesInput.value);
    storageArray.push(statusInput);

    // counter = localStorage.length+1;
    counter = getRandomInt(1000);
    if (localStorage.getItem(`newCard${counter}`)) {
        counter++;
    }
    localStorage.setItem(`newCard${counter}`, JSON.stringify(storageArray));

    storageCreator = JSON.parse(localStorage.getItem(`newCard${counter}`));

    let newCard = new Book(storageCreator[0], storageCreator[1], storageCreator[2], storageCreator[3]);
    newCard.createCard(); 

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    statusInput = '';
    storageArray = [];
    cardInput.style.display = "none";
    counter++;
    

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
        `<div class="card" id="card${counter}">
        <div class="card-exit" id="card-exit${counter}" onclick="removeCard(${counter})">X</div>
        <p class="book-title">${this.title}</p>
        <p class="book-author">${this.author}</p>
        <p class="book-pages">${this.pages}</p>
        <p class="book-status">${this.status}</p>
        </div>`;
        

        
        
    };
};

// function to remove cards
function removeCard(number) {
    let cardNumber = `newCard${number}`
    localStorage.removeItem(cardNumber);
    document.getElementById(`card${number}`).remove();
}