import * as Joi from "joi";

export const createTaskValidator = Joi.object({
    timeSlot: Joi.date().required(),
    message: Joi.string().required(),
    address: Joi.string().required(),
    amount: Joi.number().required(),
  });

  export const updateTaskValidator = Joi.object({
    timeSlot: Joi.date(),
    message: Joi.string(),
    address: Joi.string(),
    amount: Joi.number(),
  });