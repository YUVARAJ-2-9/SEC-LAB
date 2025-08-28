

// 1) Define a Book class
class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = new Date(publishedYear); // store as Date object
    }

    getSummary() {
        return `${this.title} by ${this.author}, Published: ${this.publishedYear.getFullYear()}`;
    }
}

// 2) Define a subclass EBook that extends Book
class EBook extends Book {
    constructor(title, author, publishedYear, fileSize) {
        super(title, author, publishedYear); // call parent constructor
        this.fileSize = fileSize; // extra property for EBook
    }

    // Override getSummary to include file size
    getSummary() {
        return `${this.title} by ${this.author}, Published: ${this.publishedYear.getFullYear()}, File Size: ${this.fileSize}MB`;
    }
}

// 3) Create multiple instances of Book and EBook
let book1 = new Book("The Alchemist", "Paulo Coelho", "1988-04-15");
let book2 = new Book("Atomic Habits", "James Clear", "2018-10-16");

let ebook1 = new EBook("JavaScript Guide", "Mozilla", "2020-01-01", 5);
let ebook2 = new EBook("Clean Code", "Robert C. Martin", "2008-08-01", 10);

// 4) Call their methods
console.log("📚 Book Summaries:");
console.log(book1.getSummary());
console.log(book2.getSummary());

console.log("\n💻 EBook Summaries:");
console.log(ebook1.getSummary());
console.log(ebook2.getSummary());

// Demonstrate 'this' keyword usage
console.log("\nUsing 'this' keyword directly:");
console.log(`${book1.title} is stored in variable 'book1'`);

// Demonstrate 'super()' usage
console.log("\nSuper() usage is shown inside EBook constructor where parent class constructor is called.");