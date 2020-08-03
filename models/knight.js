const Joi = require('@hapi/joi')
const  mongoose = require('mongoose')


const weaponSchema = Joi.object({
    name: Joi.string().required(),
    mod: Joi.number().required(),
    attr: Joi.string().required(),
    equipped: Joi.boolean().required()
}).required()

const attributeSchema = Joi.object().keys({
    strength: Joi.number().required(),
    dexterity: Joi.number().required(),
    constitution: Joi.number().required(),
    intelligence: Joi.number().required(),
    wisdom: Joi.number().required(),
    charisma: Joi.number().required()
}).required()

const knightSchema = Joi.object().keys({
    
    name: Joi.string()
    .min(3)
    .max(15)
    .required(),
    nickname: Joi.string()
    .required(),
    age: Joi.number()
    .min(3)
    .max(30)
    .required(),
    keyAttribute: Joi.string()
    .required(),
    weapons: Joi.array().items(weaponSchema),
    attributes: attributeSchema,
    
}).options({ abortEarly: false})

const updateSchema = Joi.object({
    nickname:Joi.string()
    .required()
}).options({ abortEarly: false})

module.exports = {knightSchema,updateSchema}