const Joi = require("joi");
// Create product validation
const create_product = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_desc: Joi.string().required().trim(),
        product_price: Joi.number().required(),
        category: Joi.string().required()
    })
}
// Exporting product validation object
module.exports = {
    create_product
}