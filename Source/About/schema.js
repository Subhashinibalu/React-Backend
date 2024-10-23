import mongoose from "mongoose";
let cardobj =  {
        "acardicon":String,
        "acardtitle":String,
        "acardcontent":String 
}
const aboutschema = new mongoose.Schema({
    abouttitle:String,
    aboutsub:String,
      aboutheading:String,
       aboutlist:[String],
      aboutimgdiv: { aboutimg1: String, aboutinfo: String, aboutimg2: String},
      aboutcarddiv: { aboutquestion: String, aboutanswer: String, aboutcards: [cardobj] }, 
        deletedAt:Date
    
  },{timestamps: true},
 


)

const about = mongoose.model("about", aboutschema);

export default about;



