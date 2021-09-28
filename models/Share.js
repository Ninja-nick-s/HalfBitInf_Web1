const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecievedSchema = new Schema({
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
  recemail: {
    type: String,
    required: true,
  },
});

module.exports = Rnotes = mongoose.model("rnote", RecievedSchema);
