import mongoose from "mongoose";

let object1 = {
    "name":String,
    "color":String,
    "img":String
}

let object2 =  {
    "h3":String,
    "list":[String],
    "img":String,
    "color":String
}

let Object3 = {
    "reasonimg":String,
    "reasonh4":String,
    "reasoncolor":String,
    "reasonp1":String,
    "reasonp2":String 
 }

 let Object4 = {
    "img":String ,
    "by":String ,
    "who":String ,
    "feedback":String 
  }

  let object5 =  {
    "q":String,
    "a":String
}
let object6 =  {
    "anime1img":String,
    "anime1class":String
}
let object8 =  {
    "anime2img":String,
    "anime2class":String
}
let object9 =  {
    "anime3img":String,
    "anime3class":String
}
let object7= {
    "featurename":String,
    "color":String,
    "logo":String,
    "description":String,
    "lists":[String],
    "featureimg":String,
    "textcolor":String
          }

const homeschema = new mongoose.Schema({
            
            "about":{
        "aboutheading":String,
        "aboutinfo1":String,
        "aboutspan":String,
        "aboutinfo2":String,
        "aboutbutton":String,
      },
      "ratingImg":String,
      "features":{
        
        "featuresTitle":String,
        "featureslist":[object7]
},
  "youtube":{
    "youtubeheading":String,
    "youtubep1":String,
    "youtubep2":String,
    "youtubevideosrc":String
},
 "reasons":{
    "reasonheading":String,
    "reasoninfo1":String,
    "reasoninfo2":String,
    "reason":[Object3]
},
 "animation":{
    "animeh2":String,
    "animep":String,
  
    "animeimages1":[object6],
    "animeimages2":[object8],
    "animeimages3":[object9],
    
},
 "customerfeedback":{
    "feedbackh1":String ,
    "detail":[Object4]
},

    "signup":{
        "signuph1":String,
        "signupspan":String,
        "signupbtn":String,
        "signupimg":String
    }
,
"faq":{
    "faqh1":String,
    "questions":[object5]
},

    "start":{
        "starth1":String,
        "starth2":String,
        "starth3":String,
        "startbtn":String
    }

,
    "caro":{
        "caroh":String,
        "carospan":String,
        "carop":String,
        "carobtn":String,
        "div1img":[String],
        "div2img":[String],
        "div3img":[String]
    },
        deletedAt:Date
  },{timestamps: true},
 


)

const home = mongoose.model("home", homeschema);

export default home;



