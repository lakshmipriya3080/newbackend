const mongoose=require("mongoose")
var mongoUrl="mongodb+srv://talenthrm2003:talent2004@cluster0.hmx7ags.mongodb.net/hrm?retryWrites=true&w=majority"
mongoose.connect(mongoUrl)
.then(()=>{
    console.log("Database Connected")

})

.catch(err =>
    {
        console.log(err)
    })

    module.exports=mongoose