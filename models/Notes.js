const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  topic: {
    type: String,
    default: "New topic",
  },
  content: {
    type: String,
    default: "Welcome to Note editor make your note here",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  subjectid: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Notes = mongoose.model("notes", NoteSchema);
