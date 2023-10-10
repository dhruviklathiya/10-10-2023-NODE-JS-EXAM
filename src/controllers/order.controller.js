const { order_Service,user_Service, cart_Service, email_Service } = require("../services");
const ejs = require("ejs")
const path = require("path")
// Create order & send mail if created :controller
const create_order = async(req,res) => {
    try {
        const reqbody = req.body;
        const user_exist = await user_Service.get_user_by_id(reqbody.user);
        if(!user_exist){
            throw new Error("User does not exist -!-");
        }
        const cart_exist = await cart_Service.get_cart_by_id(reqbody.cart);
        if(!cart_exist){
            throw new Error("Cart does not exist -!-");
        }
        const order_exist = await order_Service.get_order_by_user(reqbody.user);
        if(order_exist){
            throw new Error("Order already exist for this user -!-");
        }
        const order = await order_Service.create_order(reqbody);
        if(!order){
            throw new Error("Something went wrong -!-");
        }
        // Code for simple mail sending of confirmation
        // await email_Service.send_mail(user_exist.email,`Your order from ${user_exist.email} email is placed successfully and will dispatch soon, thank you for your time.`,"Order confirmation");

        // Code for ejs mail sending of confirmation
        await ejs.renderFile(
            path.join(__dirname, "../views/order_mail.ejs"),
            {
              email: user_exist.email,
              otp: ("0".repeat(4) + Math.floor(Math.random() * 10 ** 4)).slice(-4),
              first_name: user_exist.first_name,
              last_name: user_exist.last_name,
            },async (err, data) => {
                if (err) {
                  let userCreated = await user_Service.get_user_by_email(user_exist.email);
                  if (userCreated) {
                    await user_Service.delete_user(user_exist.email);
                  }
                  throw new Error("Something went wrong, please try again.");
                } else {
                  email_Service.send_mail(user_exist.email, data, "Order confirmation");
                }
              }
        );
        res.status(200).json({
            success:true,
            message:"Order created successfully ^-^ ",
            data:order
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}
// Update order controller
const update_order = async(req,res) => {
    try {
        const order_exist = await order_Service.get_order_by_id(req.params.orderId);
        if(!order_exist){
            throw new Error("order does not exist -!-");
        }
        const updated = await order_Service.update_order(req.params.orderId,req.body);
        if(!updated){
            throw new Error("Something went wrong");
        }
        res.status(200).json({
            success:true,
            message:"Order updated successfully ^-^ ",
            data:req.body
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}
// Order list controller
const get_order_list = async(req,res) => {
    try {
        const order_list = await order_Service.get_order_list();
        if(!order_list){
            throw new Error("Order list does not exist -!-");
        }
        res.status(200).json({
            success:true,
            message:"Order list dispatch successfully ^-^ ",
            data:order_list
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}
// Delete order controller
const delete_order = async(req,res) => {
    try {
        const order_exist = await order_Service.get_order_by_id(req.params.orderId)
        if(!order_exist){
            throw new Error("Order does not exist -!-");
        }
        const order = await order_Service.delete_order(req.params.orderId)
        if(!order){
            throw new Error("Something went wrong -!-");
        }
        res.status(200).json({
            success:true,
            message:"Order deleted successfully ^-^ ",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}
// Exporting order controller
module.exports = {
    create_order,
    get_order_list,
    update_order,
    delete_order
}