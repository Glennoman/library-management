const { Injectable, UnauthorizedException } = require('@nestjs/common');
const { injectModel } = require('@nestjs/mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./schemas/user.schema');

@Injectable()
class UserService {
  constructor(@injectModel(User.name) userModel) {
    this.userModel = userModel;
    this.jwtSecret = '';
  }

  async signup(username, password) {
    const existinguser = await this.userModel.findOne({ username });
    if (existingUser) {
      throw new UnauthorizedException('Username already exists');
    }

    const user = new this.userModel({ username, password });
    await user.save();

    const token = jwt.sign(
      { _id: user._id, username: user.username },
      this.jwtSecret,
      { expiresIn: '1h' },
    );
    return { user, token };
  }

  async login(username, password) {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new UnauthorizedException('Invalid login credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid login credentials');
    }

    const token = jwt.sign(
      { _id: user._id, username: user.username },
      this.jwtSecret,
      { expiresIn: '1h' },
    );
    return { user, token };
  }

  async validateUser(token) {
    try {
      const decoded = jwt.verify(token, this.jwtSecret);
      return this.userModel.findById(decoded._id).exec();
    } catch (err) {
      return null;
    }
  }
}

module.exports = UserService;
