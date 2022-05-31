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
let readStatusButton = document.querySelectorAll(".read");
let myLibrary = [];

formElement.addEventListener("click", (e) => {
  e.stopPropagation();
});

bookForm.addEventListener("click", function (e) {
  bookForm.style.display = "none";
});

newBook.addEventListener("click", () => {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.checked = false;
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

Book.prototype.toggleReadStatus = function () {
  if (this.read === "read") {
    this.read = "not read";
  } else if (this.read === "not read") {
    this.read = "read";
  }
};

function addBookToLibrary(title, author, pages, read) {
  read = read === true ? (read = "read") : (read = "not read");
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
        <td><button data-clrIndex=${i}>${myLibrary[i].read}</button></td>
        <td><button data-index=${i}>Remove</button></td>
                                </tr>`;
  }
  attachRemoveButton();
  attachReadStatus();
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

function attachReadStatus() {
  readStatusButton = document.querySelectorAll("[data-clrIndex]");

  readStatusButton.forEach((button) =>
    button.addEventListener("click", function (e) {
      const clrIndex = e.target.getAttribute("data-clrIndex");
      myLibrary[clrIndex].toggleReadStatus();
      displayBook();
    })
  );
}

