import Joi from "joi";

const carValidator = Joi.object({
model:Joi.string().regex(/^[А-яa-zA-zїЇґҐ]{1,20}$/).required().messages({
    'string.pattern.base':'Лише літери, мін. 1 макс. 20 символів'
}),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})
export {carValidator}