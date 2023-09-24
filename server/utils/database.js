const mongoose = require('mongoose')

let connectToDB = false;

async function connectDB() {
    mongoose.set('strictQuery', true);

    if(connectToDB){
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
          dbName: "ecom",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        connectToDB = true;
        console.log("database connected");
    } catch (error) {
        console.log('connect fail')
    }
}

module.exports.connectDB = connectDB