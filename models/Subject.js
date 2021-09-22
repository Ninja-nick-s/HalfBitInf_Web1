const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  subname: {
    type: String,
    default: "New",
  },
});

module.exports = Subject = mongoose.model("subject", SubjectSchema);
