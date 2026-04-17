const booksRepository = require('./books-repository');

async function getBooks() {
  return booksRepository.getBooks();
}

async function create(title) {
  return booksRepository.create(title);
}

async function getBook(id) {
  return booksRepository.getBookById(id);
}

module.exports = {
  getBooks,
  create,
  getBook,
};
