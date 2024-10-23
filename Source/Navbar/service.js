import navbar from "./schema.js";

export const create = async (req,res)=>{
try{
    const navdata = await navbar.create({...req.body})
    res.status(201).json({ message: "Navbar data inserted successfully", result:navdata });
}
catch (err) {
    res.status(400).json({ message: "Failed to insert navbar data", error: err.message });
}    
}

export const get = async(req,res)=>{
    try {
        const navdata = await navbar.find();
        res
        .status(200)
        .json({ message: "navbar data", result: navdata});
           
} catch (error) {
    res.status(500).json({ message: "Failed to get navbar data", error: error.message });
    
}
   
}
