const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  subname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = Subject = mongoose.model("subject", SubjectSchema);
