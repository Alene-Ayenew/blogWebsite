const express=require('express');
require('dotenv').config()
const cors=require('cors');
const cookieParser =require('cookie-parser')

const port=5000;
const postRoutes=require('./routes/posts.js')
const userRoutes=require('./routes/users.js')
const authRoutes=require('./routes/auth.js')
const app= express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.listen(port ,()=>{
    // console.log(`connected to http://localhost:${port}`);
    console.log("connected !")
})