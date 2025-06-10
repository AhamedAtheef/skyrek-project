import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRouter from "./Router/userRouter.js";
import jwt from "jsonwebtoken";
import productrouter from "./Router/productRouter.js";


const app = express()
app.use(bodyParser.json())

app.use((req,res,next)=>{
      const tvalue=req.header("Authorization")
      if (tvalue != null){
        const tvalue2=tvalue.replace("Bearer ","")
        jwt.verify(tvalue2,"ATHEEF-2007",(err,decoded)=>{
          if(decoded == null){
            res.status(403).json({message:"UnAuthorized"})
          }
          else{
              req.user= decoded
              console.log(decoded)
              next()
          }
        })
      }else{
        next()
      }
      
    
})

// connect mongodb
const connectionString = "mongodb+srv://Atheef:Atheef12345@cluster0.vh4jmgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

/* then=true , catch=false */
mongoose.connect(connectionString).then(() => {
    console.log("Database Connected")
}).catch(() => {
    console.log("Failed to connect to the database")
})


app.use("/products",productrouter)
app.use("/users", userRouter)

app.listen(5000, () => {
    console.log("Server started") 
})