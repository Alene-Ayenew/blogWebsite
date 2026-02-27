const express=require('express');
require('dotenv').config()
const cors=require('cors');
const cookieParser =require('cookie-parser')
const multer =require('multer')

const port=5000;
const postRoutes=require('./routes/posts.js')
const userRoutes=require('./routes/users.js')
const authRoutes=require('./routes/auth.js')
const app= express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})
const upload = multer({ storage});
app.post('/api/upload', upload.single('file'), function (req, res) {
    const file=req.file;
  res.status(200).json(file.filename);
})
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.listen(port ,()=>{
    // console.log(`connected to http://localhost:${port}`);
    console.log("connected !")
})