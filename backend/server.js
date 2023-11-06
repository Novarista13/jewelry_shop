const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/connect");
const jewRoutes = require("./routes/jewelleryRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");
const path = require("path");
const multer = require("multer")
dotenv.config();
app.use('/images', express.static(path.join(__dirname + '/images')));
connectDb();
app.use(cors());
app.use(express.json());



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });
app.post("/api/upload",upload.single("file"),(req,res)=>{
    console.log(req.body)
    res.status(200).json("Image has been uploaded");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/jewelleries",jewRoutes);
app.use("/api/categories",categoryRoutes);


app.listen(PORT,()=>{
    console.log("Server is running at port " + PORT);
})