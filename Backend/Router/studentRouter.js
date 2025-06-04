import express from "express"
import Student from "../models/student.js";
import { createStudents, deleteStudents, getStudents, updateStudents } from "../Controllers/stundentController.js";

// createrouter
const studentRouter=express.Router();

studentRouter.get("/",getStudents)

studentRouter.post("/",createStudents)

studentRouter.put("/",updateStudents)

studentRouter.delete("/",deleteStudents)

export default studentRouter;

