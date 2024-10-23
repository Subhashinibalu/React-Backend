import footer from "./schema.js";

export const create = async (req,res)=>{
try{
    const footerdata = await footer.create({...req.body})


    res.status(201).json({ message: "Home data inserted successfully", result:footerdata });

}
catch (err) {
    res.status(400).json({ message: "Failed to insert home data", error: err.message });
}    
}

export const get = async(req,res)=>{
    try {
        const footerdata = await footer.find();
        res
        .status(200)
        .json({ message: "footer data", result: footerdata});
} catch (error) {
    res.status(500).json({ message: "Failed to get footer data", error: error.message });  
}
   
}
