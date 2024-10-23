import mongoose from "mongoose";


const contactschema = new mongoose.Schema({
    
    "contacttitle":String,
    "contactsub1":String,
    "contacth":String,
    "contactp":String,
        deletedAt:Date
    
  },{timestamps: true},
 


)

const contact = mongoose.model("contact", contactschema);

export default contact;



