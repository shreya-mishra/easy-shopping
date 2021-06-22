import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import Product from "./models/productModel.js";

let port = process.env.PORT || 5000;

const app = express();

//accept json data
app.use(express.json());


// connecting to db
dotenv.config();
connectDB();

// Main API Routes
app.get(`${api}/products`,async(req,res)=>{
  const productList = await Product.find();
  if(!productList){
    res.status(500).json({success:false})
  }

})
app.get('/',  (req, res) => {
  res.send('api is woring')
})  

app.listen(