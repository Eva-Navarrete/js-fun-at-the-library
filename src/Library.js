function createLibrary(library) {
  var newLibrary = {
      name: library,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: []
      },
    };
    return newLibrary;
}
function addBook(newLibrary, book) {
  if (book.genre === "fantasy") {
    return newLibrary.shelves.fantasy.push(book);
  } else if (book.genre === "fiction") {
    return newLibrary.shelves.fiction.push(book);
  } else {
    return newLibrary.shelves.nonFiction.push(book);
  }
}
function checkoutBook(denverLibrary, title, genre) {
  for (i = 0; i < denverLibrary.shelves[genre].length; i++) {
      if (title === denverLibrary.shelves[genre][i].title) {
        denverLibrary.shelves[genre].splice(i, 1)
        return `You have now checked out ${title} from the ${denverLibrary.name}`
      }
    }
    return `Sorry, there are currently no copies of ${title} available at the ${denverLibrary.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
