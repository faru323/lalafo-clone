
const User = require("../models/User");

User.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, 'secretkey');
    return token;
  };
  