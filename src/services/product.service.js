const { Product } = require("../models");
// Get product by product name
const get_product_by_name = async(product_name) => {
    return Product.findOne({product_name});
}
// Create product service
const create_product = async(reqBody) => {
    return Product.create(reqBody);
};
// Gert product list service
const get_product_list = async() => {
    return Product.find().populate("category");
}
// Get product by id
const get_product_by_id = async(product_id) => {
    return Product.findById(product_id);
}
// Delete product by id
const delete_product = async(product_id) => {
    return Product.findByIdAndDelete(product_id);
}
// Update product by id
const update_product = async(product_id,reqbody) => {
    return Product.findByIdAndUpdate(product_id,{$set:reqbody});
}
// Service object export
module.exports = {
    create_product,
    get_product_by_name,
    get_product_list,
    get_product_by_id,
    delete_product,
    update_product
}