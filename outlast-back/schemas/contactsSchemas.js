import Joi from "joi"

export const createContactSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    reserved: Joi.string().required(),
    mail: Joi.string().required(),
    players: Joi.string().required(),
    price: Joi.number().required()
})

