import express from "express"
import { createUser, getUser, loginUser} from "../Controllers/userController.js"

const userRouter = express.Router()
userRouter.post("/",createUser)
userRouter.get("/",getUser)
userRouter.post("/login",loginUser)

export default userRouter;