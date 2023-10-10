const Joi = require("joi");

const create_order = {
    body: Joi.object().keys({
        delivery_address: Joi.string().required().trim(),
        payment_method: Joi.string().required().trim(),
        cart : Joi.string().required().trim(),
        user : Joi.string().required().trim(),
    })
}

module.exports = {
    create_order
}