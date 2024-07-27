const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user schema with username and password fields
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash the password before saving the user to the database
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  // Call the next middleware in the stack
  next();
});

module.expors = mongoose.model('User', userSchema);
