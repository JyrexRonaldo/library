const bookLibrary = document.querySelector("tbody")


const myLibrary = [new Book("The Hobbit", "J.R.R Tolkien", 295, true),
new Book("The Hobbit", "J.R.R Tolkien", 295, true),
new Book("The Hobbit", "J.R.R Tolkien", 295, true)]; 

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
        const readStatus = document.createElement("td");
        title.append(book.title);
        author.append(book.author);
        pages.append(book.pages);
        readStatus.append(book.readStatus);
        const bookItem = document.createElement("tr");
        bookItem.append(title, author, pages, readStatus);
        bookLibrary.append(bookItem)
    });
}


displayBook();