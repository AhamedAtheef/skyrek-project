import Student from "../models/student.js"

export async function getStudents(req,res){

    /* Student.find().then(
            
            (students)=>{
    
            res.json(students)
            console.log("finding Success")
    
        }).catch(()=>{
    
            res.json({
                "Message":"Can't find"
            })
        })  */
        // search recodes
              try{
                const students=await Student.find()
              res.json(students)
              console.log("finding success")
              }catch(error){
                res.status(500).json({message:"failed to fetch students",
                    error:error.message
                })

              }
}

export function createStudents(req,res){
     console.log(req.body)
     if(req.user == null){
        res.status(403).json({message:"Please create a account"})
        return
     }

     if(req.user.role != "admin"){
        res.status(403).json({message:"only admin can create student account"})
     } else{
        res.json({message:"you can create student account"})
        return
     }
   
        const student = new Student(
            {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email
            }
        )
    
        student.save().then(() => {
            console.log("Message Saved")
            res.json({
                "message": "Message Saved"
            })
        }).catch(() => {
            console.log("Message Not Saved")
            res.json({
                "message": "Message Not Saved"
            })
        })
}

export function updateStudents(req,res){

}

export function deleteStudents(req,res){
    
}