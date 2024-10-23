import home from "./schema.js";

export const create = async (req,res)=>{
try{
    const homedata = await home.create({...req.body})


    res.status(201).json({ message: "Home data inserted successfully", result: homedata });


}
catch (err) {
    res.status(400).json({ message: "Failed to insert home data", error: err.message });
}    
}

export const get = async(req,res)=>{
    try {
        const homedata = await home.find({ deletedAt: { $exists: false }});
        res
        .status(200)
        .json({ message: "contact data", result: homedata});
       
    
} catch (error) {
    res.status(500).json({ message: "Failed to get home data", error: error.message });
    
}
   
}
