const tableBody = document.querySelector("tbody");

let myLibrary = [];

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

addBookToLibrary("Titan", "Eren", 90, "read");
addBookToLibrary("Titan", "Eren", 90, "read");
addBookToLibrary("Titan", "Eren", 90, "read");
addBookToLibrary("Titan", "Eren", 90, "read");

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

console.log(tableBody);
