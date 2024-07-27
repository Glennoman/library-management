const {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} = require('@nestjs/common');
const { UserService } = require('../user/user.service');

// Define the JwtMiddleware class
@Injectable()
// Implement the NestMiddleware interface
class JwtMiddleware {
  constructor(UserService) {
    // Inject the UserService class
    this.userService = userService;
  }

  // Define the use method to validate the user token and set the user object in the request
  async use(req, res, next) {
    // Get the token from the authorization header in the request
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }
    // Extract the token from the authorization header
    const token = authHeader.replace('Bearer ', '');
    // Validate the user token
    const user = await this.userService.validateUser(token);

    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }

    req.user = user;
    next();
  }
}

module.exports = JwtMiddleware;
