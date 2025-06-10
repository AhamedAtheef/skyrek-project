import express from "express";
import { createProducts, deleteProducts, getProducts} from "../Controllers/productController.js";

const productrouter=express.Router()

productrouter.post("/",createProducts)
productrouter.get("/",getProducts)
productrouter.delete("/:productId",deleteProducts)



export default productrouter