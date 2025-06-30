import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export function createUser(req, res) {

    const passwordHash = bcrypt.hashSync(req.body.password, 10)

    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: passwordHash,
        role:req.body.role

    }

    const user = new User(userData)
    user.save().then(() => {
        res.json({
            message: "Saved Success",userData
        })
    }).catch(() => {
        res.json({
            message: "Not Saved"
        })
    })
}

export async function getUser(req, res) {

   /*  User.find().then((users) => {
        res.json(users)
        console.log("Finding Success")

    }).catch(() => {
        res.json({
            message: "Can't find users"
        })
    }) */

        try{
            const user = await User.find()
            res.json(user)
        }catch(error){
             res.status(500).json({message:"failed to fetch students",
             error:error.message})
        }

}

export function loginUser(req,res){
    const email=req.body.email
    const password=req.body.password

    User.findOne(
        {
        email:email
        }
).then((user)=>{
    if(user == null){
        res.status(404).json({message:"User Not Found"})
    }
    else{
      const truepassword= bcrypt.compareSync(password,user.password)
      if (truepassword){
           
           const token=jwt.sign({
            email:user.email,
            firstName:user.firstName,
            lastName:user.lastName,
            role:user.role,
            password:user.password

           },process.env.Jwt_Key)

        res.json({message:"Login success",token:token,role:user.role})
      }else{
        res.json({message:"Incorrect password"})
      }
    }
})
}

export function isAdmin(req) {
    if (req.user == null) {
        return false;
    } 

    if (req.user.role == "admin") {
        return true;
    } else {
        return false;
    }
}


