import mongoose from "mongoose";


const chatschema = new mongoose.Schema({
    
    "usermsg":[String],
    "adminrply":[String],
        deletedAt:Date
    
  },{timestamps: true},
 


)

const chatpanel = mongoose.model("chatpanel", chatschema);

export default chatpanel;



