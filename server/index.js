const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser");
const corsOption = {
  origin: true,
  credentials: true
}

const regis = require("./route/register");
const login = require('./route/login');
const logout = require('./route/logout');
const authUser = require('./middleware/auth');

require('dotenv').config();
const PORT = 4000;

app.use(cookieParser())
app.use(cors(corsOption))
app.use(express.json())
app.use('/register', regis)
app.use('/login' ,login)
app.use('/logout', logout)

app.get('/',(req,res)=>{
    res.status(200).json('Hello from Backend')
})

app.get("/userdata", authUser, (req, res) => {
  const userData = {
    userId: req.data.user_id || "",
    username: req.data.username || "cant find user"
  }
  res.status(200).json(userData);
});

app.listen(PORT, ()=>{ 
    console.log(`server running at ${PORT}`) 
})