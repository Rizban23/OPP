// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//         this.read = false;
//     }

//     toggleReadStatus() {
//         this.read = !this.read;
//     }

//     getReadStatus() {
//         return this.read ? "прочитано" : "не прочитано";
//     }
// }

// class Library {
//     constructor() {
//         this.books = [];
//     }

//     addBook(book) {
//         this.books.push(book);
//     }

//     removeBook(title) {
//         this.books = this.books.filter(book => book.title !== title);
//         console.log(`${title} удалена из библиотеки`);
//     }

//     getUnreadBooks() {
//         return this.books.filter(book => !book.read); 
//     }

//     listBooks() {
//         if (this.books.length === 0) {
//             console.log("Библиотека пуста");
//         } else {
//             this.books.forEach((book) => {
//                 console.log(`${book.author} - ${book.title} - ${book.getReadStatus()}`);
//             });
//         }
//     }
// }


// const book1 = new Book("Roman", "George Orwell", 1968);
// const book2 = new Book("Birinchi mugalim", "Chyngyz Aitmatov", 1976);
// const book3 = new Book("Акын", "Алыкул Осмонов", 1928);
// const book4 = new Book("Эрте келген турналар", "Чынгыз Айтматов", 1965);

// // библиотека 
// const myLibrary = new Library();

// // китептерди кошуу
// myLibrary.addBook(book1);
// myLibrary.addBook(book2);
// myLibrary.addBook(book3);
// myLibrary.addBook(book4);


// book3.toggleReadStatus();


// console.log("Баардык китептердин тизмеси");
// myLibrary.listBooks();


// console.log("\nОкулбаган китептер:");
// const unreadBooks = myLibrary.getUnreadBooks();
// unreadBooks.forEach(book => {
//     console.log(`"${book.title}" - ${book.author}, ${book.year}`);
// });


// myLibrary.removeBook("Roman");

// // Очургондон кийинки китептердин тизмеси
// console.log("\nСписок книг после удаления:");
// myLibrary.listBooks();
 
// Homework 2

class Calculator {
    constructor(initialValue){
        this.value = initialValue;
    }
    add(value){
        this.value += value;
    }
    subtract(value){
        this.value -= value;
    }
    multiply(value){
        this.value *= value;  
      }

    divide(value){
        this.value /= value
    }
    reset (){
        this.value = 0;
    }
    getResult(){
        return this.value
    }
}

const calc = new Calculator(10);

calc.add(10);
console.log(calc.getResult());

calc.subtract(5)
console.log(calc.getResult());

calc.multiply(5)
console.log(calc.getResult());

calc.divide(5)
console.log(calc.getResult());

calc.reset()
console.log(calc.getResult());



