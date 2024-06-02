const express = require("express");
const ctrl = require("../controllers/tasks");
const { validateBody } = require("../middlewares");
const schemas = require("../schemas/tasks");
const router = express.Router();

router.get("/", ctrl.getAllTasks);
router.post("/", validateBody(schemas.taskJoiSchema), ctrl.createTask);
router.patch("/", ctrl.updateTaskById);
// router.patch("/:id", validateBody(schemas.taskJoiSchema), ctrl.updateTaskById);
router.delete("/:id", ctrl.deleteTaskById);

module.exports = router;
