const { Injectable } = require('@nestjs/common');
const { InjectModel } = require('@nestjs/mongoose');
const Book = require('./schemas/book.schema').Book;

@Injectable()
class BookService {
  constructor(@InjectModel(Book.name) bookModel) {
    this.bookModel = bookModel;
  }

  async create(title, author) {
    const book = new this.bookModel({ title, author });
    return book.save();
  }

  async findAll() {
    return this.bookModel.find().populate('author').exec();
  }

  async findById(id) {
    return this.bookModel.findById(id).populate('author').exec();
  }

  async update(id, title, author) {
    return this.bookModel
      .findByIdAndUpdate(id, { title, author }, { new: true })
      .exec();
  }

  async delete(id) {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}

module.exports = BookService;
