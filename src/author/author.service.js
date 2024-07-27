const { Injectable } = require('@nestjs/common');
const { InjectModel } = require('@nestjs/mongoose');
const Author = require('./schemas/author.schema');

@Injectable()
class AuthorService {
  constructor(@InjectModel(Author.name) authorModel) {
    this.authorModel = authorModel;
  }

  async create(name) {
    const author = new this.authorModel({ name });
    await author.save();
  }

  async findAll() {
    return this.authorModel.find().exec();
  }

  async findOne(id) {
    return this.authorModel.findById(id).exec();
  }

  async update(id, name) {
    return (
      this, authorModel.findByIdAndUpdate(id, { name }, { new: true }).exec()
    );
  }

  async delete(id) {
    return this.authorModel.findByIdAndDelete(id).exec();
  }
}

module.exports = AuthorService;
