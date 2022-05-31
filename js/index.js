const tableBody = document.querySelector("tbody");
const newBook = document.querySelector(".library .newBook");
const bookForm = document.querySelector(".form");
const formButton = document.querySelector(".submit button");
const bookTitle = document.querySelector("input[name='title']");
const bookAuthor = document.querySelector("input[name='author']");
const bookPages = document.querySelector("input[name='pages']");
const bookRead = document.querySelector("input[name='read']");
const formElement = document.querySelector("form");
let removeButton = document.querySelectorAll("button[data-index]");
let myLibrary = [];

formElement.addEventListener("click", (e) => {
  e.stopPropagation();
});

bookForm.addEventListener("click", function(e) {
    bookForm.style.display = "none";
});

newBook.addEventListener("click", () => {
  bookForm.style.display = "flex";
});

formButton.addEventListener("click", function () {
  addBookToLibrary(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.checked
  );
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
}

function displayBook() {
  tableBody.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    tableBody.innerHTML += `<tr data-index=${i}>
        <td>${myLibrary[i].title}</td>
        <td>${myLibrary[i].author}</td>
        <td>${myLibrary[i].pages}</td>
        <td>${myLibrary[i].read}</td>
        <td><button data-index=${i}>Remove</button></td>
                                </tr>`;
  }
  attachRemoveButton();
}

function attachRemoveButton() {
  removeButton = document.querySelectorAll("button[data-index]");

  removeButton.forEach((button) =>
    button.addEventListener("click", function (e) {
      const index = e.target.getAttribute("data-index");
      myLibrary.splice(index, 1);
      tableBody.removeChild(
        document.querySelector(`tbody > tr[data-index="${index}"]`)
      );
      displayBook();
    })
  );
}
