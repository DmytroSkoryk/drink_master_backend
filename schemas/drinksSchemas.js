import Joi from "joi";

const drinkAddSchema = Joi.object({
  drink: Joi.string().required(),
  category: Joi.string().required(),
});

export default {
  drinkAddSchema,
};
