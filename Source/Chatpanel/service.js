import chatpanel from "./schema.js";

export const create = async (req,res)=>{
try{
    const chatdata = await chatpanel.create({...req.body})


    res.status(201).json({ message: "Chatpanel data inserted successfully", result: chatdata });


}
catch (err) {
    res.status(400).json({ message: "Failed to insert chat data", error: err.message });
}    
}

export const get = async(req,res)=>{
    try {
        const chatdata = await chatpanel.find({ deletedAt: { $exists: false }});
        res
        .status(200)
        .json({ message: "chat data", result:chatdata});
       
    
} catch (error) {
    res.status(500).json({ message: "Failed to get chat data", error: error.message });
    
}
   
}
