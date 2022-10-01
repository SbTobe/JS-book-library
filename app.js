//Book class

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

//UI Class
class UI {
  static displayBooks() {
   
    const books = storedBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  //add the book
  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><a href="#" class="btn delete-book delete btn-danger btn-sm">Remove</a></td>
        `;

    list.appendChild(row);
  }
  //delete the book
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
  }
}

//display books

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// function to add book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //getting the input values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  //validate the fields
  if (title === "" || author === "" || pages === "") {
    alert("Please fill in all fields");
  } else {
    const book = new Book(title, author, pages);

    UI.addBookToList(book);

    UI.clearFields();
  }
});

//Remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
