const dialogBox = document.querySelector("dialog");
const newBookBtn = document.querySelector(".new-book");
const bookLibrary = document.querySelector("tbody");
const formButton = document.querySelector("form button")


const myLibrary = [new Book("The Hobbit", "J.R.R Tolkien", 295, true),
new Book("The Hobbit", "J.R.R Tolkien", 295, false),
new Book("The Hobbit", "J.R.R Tolkien", 295, true),
new Book("The Hobbit", "J.R.R Tolkien", 295, false)
]; 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBook() {
    myLibrary.forEach((book) => {
        const title = document.createElement("td");
        const author = document.createElement("td");
        const pages = document.createElement("td");
        const readBtn = document.createElement("button");
        const readStatus = document.createElement("td");
        const deletebtn = document.createElement("button");
        const deleteCell = document.createElement("td");
        const bookItem = document.createElement("tr");
        
        title.append(book.title);
        author.append(book.author);
        pages.append(book.pages);
        readStatus.append(readBtn);
        readBtn.append(book.readStatus);
        deleteCell.append(deletebtn)
        bookItem.append(title, author, pages, readStatus, deleteCell);
        bookLibrary.append(bookItem)
        
        deletebtn.textContent = "Delete";
        readBtn.textContent = book.read ? "read" : "not read";
    });
}

displayBook();

newBookBtn.addEventListener("click", () => {
    dialogBox.showModal()
});

formButton.addEventListener("click", (e) => {
    console.log("yeah");
})