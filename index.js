import express from 'express';
import connectDB from './Database/Config.js';
import aboutcontroller from "./Source/About/controller.js"
import contactcontroller from "./Source/Contact/controller.js";
import supportcontroller from "./Source/Support/controller.js";
import homecontroller from "./Source/Home/controller.js";
import navcontroller from "./Source/Navbar/controller.js";
import footercontroller from "./Source/Footer/controller.js";
import cors from 'cors';


const app = express();
app.use(cors())

app.use(express.json());
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3005,()=>{
    console.log('Server is running on port 3005');
});

app.use('/api/about',aboutcontroller)
app.use('/api/contact',contactcontroller)
app.use('/api/support',supportcontroller)
app.use('/api/home',homecontroller)
app.use('/api/navbar',navcontroller)
app.use('/api/footer',footercontroller)
