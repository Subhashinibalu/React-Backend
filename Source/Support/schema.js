import mongoose from "mongoose";

let cardobject = new Object({
    "scardicon":String,
    "scardh5":String,
    "scardp":String,
    "scardbtn":String
})
let div1object = {
    "div1icon":String,
    "div1title":String,
    "div1text":String,
    "div1btntxt":String
}
let div2object = {
    "div2icon":String,
    "div2title":String,
    "div2text":String,
    "div2btntxt":String
}

const supportschema = new mongoose.Schema({
"supporttitle":String,
"supportsub1":String,
"supportsub2":String,
        "supporth":String,
        "supportdiv1":div1object,
        "supportdiv2":div2object,
        "supportquestion":String,
        "supportanswer":String,
        "supportcard":[cardobject],
        "whatsapp":{
            "whatsapph":String,
            "whatsappinfo":String,
            "whatsappbtn":String
        },  
        deletedAt: Date
    
  },{timestamps: true},
 


)

const support = mongoose.model("support", supportschema);

export default support;



