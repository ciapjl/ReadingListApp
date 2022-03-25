const moongose = require("mongoose");

const readingListSchema = new moongose.Schema({
  links: {
    link: { type: String, required: true },
    linkWithoutPaywall: { type: String },
  },
  title: { type: String, required: false },
  userID: { type: String, required: true },
  dateAdded: { type: Date, require: true, default: Date.now },
});

module.exports = moongose.model("readingList", readingListSchema);
