import express from "express"
import { CreateOrder, getOrders } from "../Controllers/ordersController.js"

const orderRouter = express.Router()

orderRouter.post("/", CreateOrder)
orderRouter.get("/", getOrders)


export default orderRouter;