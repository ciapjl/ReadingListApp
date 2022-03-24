const moongose = require("mongoose");

const userSchema = new moongose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    require: false,
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = moongose.model("User", userSchema);
