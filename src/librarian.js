class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;

  }
  greetPatron(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;

    }
  };
  findBook(bookTitle){
    var newBook = this.library.shelves['fantasy'][0]['title'];
    var saying;
    if (bookTitle === newBook) {
      saying = `Yes, we have ${bookTitle}`
      this.library.shelves['fantasy'].pop()
    } else {
      saying = `Sorry, we do not have ${bookTitle}`
    }
    return saying
  };
calculateLateFee(daysLate) {
var lateFee = daysLate * .25;
return Math.ceil(lateFee);
}
}


module.exports = Librarian;
