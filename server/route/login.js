const express = require('express');
const router = express.Router();
const User = require('../models/user').User
const bcrypt = require('bcrypt');
const { connectDB } = require('../utils/database');
const jwt = require('jsonwebtoken')

router.post('/',async(req,res)=>{
    const { username, password } = req.body;
    try {
        await connectDB();

        const findUser = await User.findOne({ username });
        if(!findUser){
            return res.status(404).send("user not found"); 
        }

        const passwordHash = findUser.password
        const comparePass = await bcrypt.compare(password, passwordHash);

        if(!comparePass){
            return res.status(400).send("wrong password");
        }
        const token = jwt.sign(
          {
            user_id: findUser._id,
            username,
          },
          process.env.JWT_PRIVATE_KEY,
          {
            expiresIn: "365d",
          }
        );
        return res.status(200).json({ token: token });
    } catch (error) {
        console.log(error)
    }
})

module.exports = router