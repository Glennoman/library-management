const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const UserService = require('./user/user.service');
const JwtMiddleware = require('./middleware/jwt.middleware');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const userService = app.get(UserService);
  app.use(
    new JwtMiddleware(userService).use.bind(new JwtMiddleware(userService)),
  );
  await app.listen(3000);
}
bootstrap();
