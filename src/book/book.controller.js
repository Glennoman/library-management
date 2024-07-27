const {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} = require('@nestjs/common');
const BookService = require('./book.service');

@Controller('books')
class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  @Post()
  async create(@Body('title') title, @Body('author') author) {
    return this.bookService.create(title, author);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id) {
    return this.bookService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body('title') title, @Body('author') author) {
    return this.bookService.update(id, title, author);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return this.bookService.delete(id);
  }
}

module.exports = BookController;
