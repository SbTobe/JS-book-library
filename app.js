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
    const storedBooks = [
      {
        title: "life of Toby",
        author: "Toby",
        pages: "1337",
      },
      {
        title: "life of Toby: The Journey",
        author: "Toby",
        pages: "1337",
      },
    ];

    const books = storedBooks;

    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><a href="#" class="delete-book">X</a></td>
        `;

    list.appendChild(row);
  }
}
//Store class

//Events display books

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event add book

//event remove book
