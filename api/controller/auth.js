const db= require('../db/db.js')
const bcrypt=require('bcrypt')
const register=(req,res)=>{
    // check if user exist
    const query="SELECT * FROM users WHERE email= ? OR username =?"
    db.query(query,[req.body.email, req.body.username],(err,data)=>{
        if(err)  return res.status(500).json(err);
        // check if user already exist 
        if(data.length>0){
            return res.status(409).json("user already exists with this email or user name");
        }
        // hash the password and create the user 
    const salt =  bcrypt.genSaltSync(10);
    const hashedPassword =  bcrypt.hashSync(req.body.password,salt);
    const query="INSERT INTO users (`username`,`email`,`password`) VALUES (?)"
    const values=[
        req.body.username,
        req.body.email,
        hashedPassword
    ];
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.status(200).json("user has been created");
    })
    })
}
const login=(req,res)=>{
    res.json("login")
}
const logout=(req,res)=>{
    res.json("logout")
}
module.exports={register,login,logout}