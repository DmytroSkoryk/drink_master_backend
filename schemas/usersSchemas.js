import Joi from "joi";
import { emailRegexp, passwordRegexp } from "../constants/userConstants.js";

const userSignupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).pattern(passwordRegexp).required(),
});
const userSigninSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(passwordRegexp).required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().required(),
});

export default {
  userSignupSchema,
  userSigninSchema,
  updateUserSchema,
};
