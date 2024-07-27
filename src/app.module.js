const { Module } = require('@nestjs/common');
const { MongooseModule } = require('@nestjs/mongoose');
const UserModule = require('./user/user.module');
const AuthorModule = require('./author/author.module');
const BookModule = require('./book/book.module');

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
    AuthorModule,
    BookModule,
  ],
})
class AppModule {}

module.exports = AppModule;
