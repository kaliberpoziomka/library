// global variables
let card = document.querySelector(".card");
let bookTitle = document.querySelector(".book-title");
let bookAuthor = document.querySelector(".book-author");
let bookPages = document.querySelector(".book-pages");
let bookStatus = document.querySelector(".book-status");


// main object
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};


