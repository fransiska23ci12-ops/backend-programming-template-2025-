const { Books } = require('../../../models');

async function getBooks() {
  return Books.find({});
}

async function create(title) {
  return Books.create({ title });
}

async function getBookById(id) {
  return Books.findById(id);
}

module.exports = {
  getBooks,
  create,
  getBookById,
};
