function shelfBook(book, shelf) {
 if (shelf.length < 3) {
    return shelf.unshift(book);
  } else {
    return;
  }
}
function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i,1)
    }
  }
  return;
}
function listTitles(shelf) {
  var list = [];
    for (var i = 0; i < shelf.length; i++) {
      list.push(shelf[i].title);
    }
    return list.join(", ")
}
function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title)  {
      return true;
    }
  }
     return false;
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
