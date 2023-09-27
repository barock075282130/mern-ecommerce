const router = require('express').Router()
const userOrder = require('../models/userorder').userOrder
const { connectDB } = require('../utils/database')

router.post('/',async(req,res)=>{
    const { userId, order, total } = await req.body;
    try {
        await connectDB()
        const orderData = order.map((item) => ({
          productId: item.productId,
          productName: item.detail,
          productPrice: item.price,
          productQuantity: item.quantity,
        }));
        await userOrder.create({
          userId,
          order: orderData,
          totalPrice: total,
        });
        res.status(200).send('order success')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;