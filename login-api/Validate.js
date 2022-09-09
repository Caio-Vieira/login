const Joi = require('joi')

function registerValidate(data) {

    const schema = Joi.object({
        username: Joi.string().min(3).max(15).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().min(8).max(15).required()
    })

    return schema.validate(data)
}

function loginValidate(data) {

    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().min(8).max(15).required()
    })

    return schema.validate(data)
}

module.exports = { registerValidate, loginValidate }