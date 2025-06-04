import mongoose from "mongoose"

// create structure
const studentSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        email: String
    }
)
//connect database
const Student = mongoose.model("student", studentSchema)
export default Student;

