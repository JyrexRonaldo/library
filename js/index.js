const dialogBox = document.querySelector("dialog");
const newBookBtn = document.querySelector(".new-book");
const bookLibrary = document.querySelector("tbody");
const formButton = document.querySelector("form button");
const titleInput = document.querySelector("input[name=title]");
const authorInput = document.querySelector("input[name=author]");
const pagesInput = document.querySelector("input[name=pages]");
const readStatusInput = document.querySelector("input[name=read]");

console.log(titleInput)

const myLibrary = []; 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newbook = new Book(title, author, pages, read)
    myLibrary.push(newbook)
}

function displayBook() {
    bookLibrary.innerHTML = "";
    myLibrary.forEach((book, index) => {
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
        
        readBtn.textContent = book.read ? "read" : "not read";
        readBtn.setAttribute("data-index", index);
        deletebtn.textContent = "Delete";
        deletebtn.setAttribute("data-index", index);

        deletebtn.addEventListener("click", (e) => {
            let bookIndex = e.target.getAttribute("data-index");
            myLibrary.splice(bookIndex, 1);
            displayBook()
        });

        readBtn.addEventListener("click", (e) => {
            let bookIndex = e.target.getAttribute("data-index");
            if (myLibrary[bookIndex].read) {
                myLibrary[bookIndex].read = false;
            } else {
                myLibrary[bookIndex].read = true;
            }
            displayBook()
        });
    });
}

displayBook();

newBookBtn.addEventListener("click", () => {
    dialogBox.showModal()
});

formButton.addEventListener("click", (e) => {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readStatusInput.checked)
    console.log(readStatusInput.checked)
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    readStatusInput.checked = null;
    displayBook()
})