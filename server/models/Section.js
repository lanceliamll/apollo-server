const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
  studentId: {
    type: [Schema.Types.ObjectId],
    ref: "Student"
  },
  sectionName: {
    type: String,
    required: true,
    unique: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Section", SectionSchema);
