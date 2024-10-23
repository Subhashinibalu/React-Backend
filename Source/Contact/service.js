import contact from "./schema.js";

export const create = async (req,res)=>{
try{
    const contactdata = await contact.create({...req.body})


    res.status(201).json({ message: "Contact data inserted successfully", result: contactdata });


}
catch (err) {
    res.status(400).json({ message: "Failed to insert contact data", error: err.message });
}    
}

export const get = async(req,res)=>{
    try {
        const contactdata = await contact.find({ deletedAt: { $exists: false } }
);
        res
        .status(200)
        .json({ message: "contact data", result: contactdata});
       
    
} catch (error) {
    res.status(500).json({ message: "Failed to get contact data", error: error.message });
    
}
   
}
