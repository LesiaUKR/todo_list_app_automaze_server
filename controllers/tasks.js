const { Task } = require("../models/task");
const { ctrlWrapper } = require("../helpers");
const { HttpError } = require("../helpers");

const getAllTasks = async (req, res) => {
  console.log(req.query);
  const result = await Task.find(req.query);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const createTask = async (req, res) => {
  const result = await Task.create(req.body);
  res.status(201).json(result);
};

const updateCompletedTaskById = async (req, res) => {
  const { id } = req.params;
  const { completed, ...updates } = req.body; // Виокремлюємо поле completed

  const result = await Task.findByIdAndUpdate(
    id,
    { ...updates, completed },
    { new: true }
  ); // Додаємо completed до оновлень
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deleteTaskById = async (req, res) => {
  const { id } = req.params;
  console.log("Received request to delete task with ID:", id);
  const result = await Task.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Delete successfully",
  });
};

module.exports = {
  getAllTasks: ctrlWrapper(getAllTasks),
  createTask: ctrlWrapper(createTask),
  deleteTaskById: ctrlWrapper(deleteTaskById),
  updateTaskById: ctrlWrapper(updateCompletedTaskById),
};
