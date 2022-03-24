const moongose = require("mongoose");

const readingListSchema = new moongose.Schema({
  username: { type: String, required: true },
  link: { type: String, required: true },
  linkWithoutPaywall: { type: String },
  title: { type: String, required: false },
  dateAdded: { type: Date, require: true, default: Date.now },
});

module.exports = moongose.model("readingList", readingListSchema);
