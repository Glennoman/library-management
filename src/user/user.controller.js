const {
  Controller,
  Post,
  Body,
  UnauthorizedException,
} = require('@nestjs/common');
const { UserService } = require('./user.service');

@Controller('user')
class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  @Post('signup')
  async signUp(@Body() body) {
    const { username, password } = body;
    return this.userService.signUp(username, password);
  }

  @Post('login')
  async login(@Body() body) {
    const { username, password } = body;
    return this.userService.login(username, password);
  }
}

module.exports = UserController;
