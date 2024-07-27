const {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} = require('@nestjs/common');
const AuthorService = require('./author.service');

@Controller('authors')
class AuthorController {
  constructor(authorService) {
    this.authorService = authorService;
  }

  @Post()
  async create(@Body('name') name) {
    return this.authorService.create(name);
  }

  @Get()
  async findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id) {
    return this.authorService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body('name') name) {
    return this.authorService.update(id, name);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return this.authorService.delete(id);
  }
}

module.exports = AuthorController;
