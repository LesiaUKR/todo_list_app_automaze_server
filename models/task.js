const { Schema, model } = require("mongoose");
const { handleSaveError, preUpdate } = require("../helpers/hooks");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set task title"],
    },
    description: {
      type: String,
    },
    date: {
      type: String,
      required: [true, "Set task date"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: Number,
      min: 1,
      max: 10,
      required: [true, "Set task priority"],
    },
  },
  { versionKey: false, timestamps: true }
);

taskSchema.post("save", handleSaveError);

taskSchema.pre("findOneAndUpdate", preUpdate);

taskSchema.post("findOneAndUpdate", handleSaveError);

const Task = model("task", taskSchema);

module.exports = {
  Task,
};
