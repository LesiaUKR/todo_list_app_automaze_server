const Joi = require("joi");

const taskJoiSchema = Joi.object({
  title: Joi.string().messages({
    "any.required": "Set task title",
  }),
  description: Joi.string().messages({
    "any.required": "Set task description",
  }),
  date: Joi.string().messages({
    "any.required": "Set task date",
  }),
  completed: Joi.boolean().messages({
    "any.required": "Set completed status",
  }),
  priority: Joi.number().integer().min(1).max(10).messages({
    "any.required": "Set task priority",
    "number.min": "Priority must be at least 1",
    "number.max": "Priority must be at most 10",
  }),
});

module.exports = {
  taskJoiSchema,
};

module.exports = {
  taskJoiSchema,
};
