function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character1 = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character1;
}

function saveReview(criticism, rating) {
  // if the rating does not include criticism
  // push criticism
  if(!rating.includes(criticism)) {
    rating.push(criticism)
  }
  return rating;
}

function calculatePageCount(bookName) {
  var numOfPage = `${bookName}`.length; // this counts the string 
  // console.log(numOfPage)
  var totalPage = numOfPage * 20;//this multiplies the string by 20
  // console.log(totalPage)
  return totalPage;
}

function writeBook(aboutBook, person, category) {
  var novel = {
    title: aboutBook,
    mainCharacter: person,
    pageCount: calculatePageCount(aboutBook),
    genre: category
  }
  return novel
}

function editBook(bookTitle) {
  // var newPageCount = Math.floor(bookTitle.pageCount * 0.75);
  // bookTitle.pageCount = newPageCount;
  // return bookTitle
  bookTitle.pageCount = bookTitle.pageCount * 0.75;
  return bookTitle;
  // bookTitle.length = bookTitle.length * 0.75;
  // return bookTitle
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}