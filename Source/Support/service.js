import support from "./schema.js";

export const create = async (req,res)=>{
try{
    const contactdata = await support.create({...req.body})


    res.status(201).json({ message: "Support data inserted successfully", result: contactdata });


}
catch (err) {
    res.status(400).json({ message: "Failed to insert support data", error: err.message });
}    
}

export const get = async(req,res)=>{
    try {
        const supportdata = await support.find({ deletedAt: { $exists: false }});
        res
        .status(200)
        .json({ message: "support data", result: supportdata});
       
    
} catch (error) {
    res.status(500).json({ message: "Failed to get about data", error: error.message });
    
}
   
}
