const express = require('express')
const router = express.Router();
const User = require('../models/user').User
const { connectDB } = require('../utils/database');
const bcrypt = require('bcrypt');

router.post('/',async(req,res)=>{
    const { username, password } = await req.body;
    try {
        await connectDB();

        const existUser = await User.findOne({ username })
        if(existUser !== null){
            return res.status(200).send("user already exist");
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const createUser = new User({
            username: username,
            password: passwordHash,
        });

        await createUser.save();

        return res.status(200).send("create success");
    } catch (error) {
        return res.status(500).send("create failed");
    }
})

module.exports = router