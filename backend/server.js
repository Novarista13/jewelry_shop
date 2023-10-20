const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/connect");
const jewRoutes = require("./routes/jewelleryRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");
dotenv.config();

connectDb();
app.use(cors());
app.use(express.json());
app.use("/api/jewelleries",jewRoutes);
app.use("/api/categories",categoryRoutes);

app.listen(PORT,()=>{
    console.log("Server is running at port " + PORT);
})