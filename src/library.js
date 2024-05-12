
// function createLibrary(bookStore, genres) {
//   var libraryName ={
//     name: bookStore,
//     shelves: {
//       fantasy: genres = [],
//       nonFiction: genres = [],
//       fiction: genres = []
//     }
//   }
//   return libraryName
  
// }

function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      nonFiction: [],
      fiction: []
    }
  }
}

// function addBook(library, book) {
//   library.shelves.fantasy.push(book);
// }
// function unshelfBook(title, shelf) {
//   for(var i = 0; i < shelf.length; i++) {
//     if(title === shelf[i].title) {
      // shelf.splice(i, 1)
//     }
//   }
// }

function addBook(library, book) {
  // this will allow us to grab the genre of the book
  var genre = book.genre;
  //hasOwnProperty checks if the genre is there on the shelve in that library
  if(library.shelves.hasOwnProperty(genre)) {
    // if it does, it pushes the book to be added
    library.shelves[genre].push(book)
  }
}

function checkoutBook(library, bookTitle, genre) {
  if(library.shelves.hasOwnProperty(genre)) {
    var index = library.shelves[genre].findIndex(book => book.title === bookTitle);
    if(index !== -1) {
      var verified = library.shelves[genre].splice(index, 1)[0];
      return `You have now checked out ${verified.title} from the ${library.name}.`
    }
    else {
      return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
    }
  }
  
}

function takeStock(library, genre) {
  if(genre) {
    if(library.shelves.hasOwnProperty(genre)) {
      // count and tell us how many books are in that shelf
      var numberBooks = library.shelves[genre].length;
       return `There are a total of ${numberBooks} ${genre} books at the ${library.name}.`
    }
  }
  else {
    var totalBooks = 0;
    for(var shelf in library.shelves) {
      totalBooks += library.shelves[shelf].length;
    }
    return `There are a total of ${totalBooks} books at the ${library.name}.`
  }
}






module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};