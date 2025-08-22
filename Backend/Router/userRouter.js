import express from "express"
import { createUser, getUser, isUser, loginUser} from "../Controllers/userController.js"

const userRouter = express.Router()
userRouter.post("/",createUser)
userRouter.get("/",getUser)
userRouter.get("/isuser",isUser)
userRouter.post("/login",loginUser)

export default userRouter;