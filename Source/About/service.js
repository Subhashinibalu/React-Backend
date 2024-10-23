import about from "./schema.js";

export const create = async (req,res)=>{
try{
    const abtdata = await about.create({...req.body})


    res.status(201).json({ message: "About data inserted successfully", result: abtdata });
    

}
catch (err) {
    res.status(400).json({ message: "Failed to insert about data", error: err.message });
}    





}


export const get = async(req,res)=>{
    try {
        const aboutdata = await about.find({ deletedAt: { $exists: false }});
        res
        .status(200)
        .json({ message: "about data", result: aboutdata });
        
    
} catch (error) {
    res.status(500).json({ message: "Failed to get about data", error: error.message });
    
}
   
}







// await about.insertMany({
//     aboutpos:"About PosBytz",
//     info1:"PosBytz is a complete omnichannel solution for Retail & Restaurants.",
//     info2:"We are a team passionately focused on driving small business success.",
//     info3:"Our vision is to leverage cloud-based technologies to help companies improve service and profitability.",
//     info4:"We address the needs of a wide range of customers from small independent stores to local chains and large enterprises",
//     info5:"PosBytz is a product of Bytize, Inc.",

   
//     imgdiv: { img1: "https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg", para: "a product of", img2: "https://posbytz.com/wp-content/uploads/2021/09/bytize.svg"},
//     carddiv: { question: "How to Reach", answer:"Talk to our expert today and learn how PosBytz can help your business.", cards: [
//         {
//             card:{
//                 "icon":"bi bi-person-plus-fill",
//                 "title":"Become a Partner",
//                 "content":"We’d love to talk about how we can work together.."
//             }
//         },
//         {
//             card:{
//                 "icon":"bi bi-envelope-paper-fill",
//                 "title":"General Inquiry",
//                 "content":"For general queries, company info and career opportunities."
//             }
//         },
//         {
//             card:{
//                 "icon":"bi bi-headset",
//                 "title":"Contact Support",
//                 "content":"Our support team is always ready to provide any assistance you may need.",
//                 "description":"We are always"
//             }
//         }
        
//         ] }

// })