function createTitle(title) {
  return `The ${title}`;

}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character;
}

function saveReview(newReview, review) {
  if (review.includes(newReview)) {
    return review;
  } else {
    return review.push(newReview)
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(book, bookCharacter, genre) {
  var book = {
    title: book,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(book),
    genre: genre
  }
  return book;
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;

}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
