const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
    default: "Welcome to Note editor make your note here",
  },
  topic: {
    type: String,
    default: "New topic",
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
