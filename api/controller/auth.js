const db= require('../db/db.js')
const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken');
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
const login = (req, res) => {
  const query = "SELECT * FROM users WHERE username = ?";
  
  db.query(query, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(404).json("User not found!");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "lax",
      })
      .status(200)
      .json(other);
  });
};
const logout = (req, res) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false
  }).status(200).json("user has been logged out");
};
module.exports={register,login,logout}