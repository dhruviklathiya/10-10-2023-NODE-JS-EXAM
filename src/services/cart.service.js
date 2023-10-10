const { Cart } = require("../models");
// Get cart by user service
const get_cart_by_user = async(user) => {
    return Cart.findOne({user});
}
// Get cart by id service
const get_cart_by_id = async(cart_id) => {
    return Cart.findById(cart_id);
}
// Create cart service
const create_cart = async(reqbody) => {
    return Cart.create(reqbody);
}
// Get cart list service
const get_cart_list = async() => {
    return Cart.find().populate("user",{first_name:1,last_name:1,email:1}).populate("product1",{product_name:1,product_desc:1,product_price:1,sub_child_category_id:1}).populate("product2").populate("product3").populate("product4").populate("product5");
}
// Delete cart service
const delete_cart = async(cart_id) => {
    return Cart.findByIdAndDelete(cart_id);
}
// Update cart sevice
const update_cart = async(cart_id,reqbody) => {
    return Cart.findByIdAndUpdate(cart_id,{$set:reqbody});
}
// Exporting cart object
module.exports = {
    get_cart_by_user,
    get_cart_by_id,
    create_cart,
    get_cart_list,
    delete_cart,
    update_cart
}