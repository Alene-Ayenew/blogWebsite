const db= require('../db/db.js')
const jwt=require('jsonwebtoken');
const getPosts=(req, res)=>{
    const query=req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?":
    "SELECT * FROM posts";
db.query(query,[req.query.cat],(err,data)=>{
    if(err) return res.status(500).send(err);
    return res.status(200).json(data);
});
};


const getPost=(req, res)=>{
   const query = `
SELECT p.id, u.username, p.title, p.description, p.img,
u.img AS userImage, p.cat, p.date
FROM users u
JOIN posts p ON u.id = p.uid
WHERE p.id = ?
`;
   db.query(query,[req.params.id],(err,data)=>{
    if(err) return res.status(500).json(err)
        return res.status(200).json(data[0]);
   })

}


const addPost=(req, res)=>{
    const token=req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated!")
        jwt.verify(token, "jwtkey",(err,userInfo)=>{
    if(err) return res.status(403).json("token is not valid");
    const query="INSERT INTO posts(`title`,`description`,`img` ,`cat`,`date`,`uid`) VALUES(?) "
    const values=[
        req.body.title,
        req.body.description,
        req.body.img,
        req.body.cat,
        req.body.date,
        userInfo.id
    ];
    db.query(query,[values],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.json("posts has been created");
    });
        });
}


const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token Not valid!");

    const postId = req.params.id;
    const query = "DELETE FROM posts WHERE `id`=? AND `uid`=?";

    db.query(query, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been deleted");
    });
  });
};


const updatePost=(req, res)=>{
     const token=req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated!")
        jwt.verify(token, "jwtkey",(err,userInfo)=>{
    if(err) return res.status(403).json("token is not valid");
    const postId=req.params.id;
    const query="UPDATE posts SET `title`=?,`description`=?,`img`=?,`cat`=? WHERE `id`=? AND `uid`=? ";
    const values=[
        req.body.title,
        req.body.description,
        req.body.img,
        req.body.cat
       
    ];
    db.query(query,[...values,postId,userInfo.id],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.json("posts has been updated");
    });
        });
}


module.exports={
    addPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
}
