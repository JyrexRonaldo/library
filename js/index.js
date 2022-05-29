const tableBody = document.querySelector("tbody");
const newBook = document.querySelector(".library button");
const bookForm = document.querySelector(".form");
const formButton = document.querySelector(".submit button");
const bookTitle = document.querySelector("input[name='title']");
const bookAuthor = document.querySelector("input[name='author']");
const bookPages = document.querySelector("input[name='pages']");
const bookRead = document.querySelector("input[name='read']");
let myLibrary = [];

addBookToLibrary("Titan", "Eren", 90, "read");
addBookToLibrary("Titan", "Eren", 90, "read");
addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);

newBook.addEventListener("click", () => {
    bookForm.style.display = "flex";
});

formButton.addEventListener("click", function() {
    tableBody.innerHTML = "";
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    bookForm.style.display = "none";
    displayBook();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  console.log("Hello")
}



function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    tableBody.innerHTML += `<tr>
        <td>${myLibrary[i].title}</td>
        <td>${myLibrary[i].author}</td>
        <td>${myLibrary[i].pages}</td>
        <td>${myLibrary[i].read}</td>
                                </tr>`;
  }
}

displayBook();

console.log(bookRead.value);
