const express = require("express")
const userRouter = require("./user.route")
const cartRouter = require("./cart.route")
const orderRouter = require("./order.route")
const productRouter = require("./product.route")
const categoryRouter = require("./category.route")
const router = express.Router()

router.use("/user",userRouter)
router.use("/product",productRouter)
router.use("/cart",cartRouter)
router.use("/order",orderRouter)
router.use("/category",categoryRouter)

module.exports = router