const mongoose = require("mongoose");

// Question Schema
const QuestionSchema = mongoose.Schema({
  title: String,
  options: [
    {
      value: String,
      isCorrect: Boolean
    }
  ],
  created_at: Date,
  updated_at: Date,
  is_deleted: Boolean
});

// Question Model
const Question = mongoose.model("Question", QuestionSchema);

module.exports = { Question };
