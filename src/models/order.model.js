const mongoose = require("mongoose");
// Order schema make
const order_Schema = new mongoose.Schema(
    {
        delivery_address :{
            type:String,
            trim:true
        },
        payment_method:{
            type:String,
            trim:true
        },
        cart:{
            type:mongoose.Types.ObjectId,
            ref:"Cart"
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"User"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
// Order model creating
const order = mongoose.model("Order",order_Schema)
// Exporting order model
module.exports = order;