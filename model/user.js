const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://talenthrm2003:talent2004@cluster0.hmx7ags.mongodb.net/hrm?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

const userSchema=mongoose.Schema(
    {
        
        hrid:
        {
            type:String,
            required:true
        },
    
        password:
        {
            type:String,
            required:true
        }
    },
    {
        timestamps:true

    }
)
var usersmodel =mongoose.model("hrm",userSchema)
module.exports=usersmodel;
