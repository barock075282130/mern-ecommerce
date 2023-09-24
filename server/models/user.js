const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        require: [true, "User cant be empty"],
    },
    password: {
        type: String,
        require: [true, "Password cant be empty"],
    },
})

const User = model("User", userSchema) || models.User

module.exports.User = User