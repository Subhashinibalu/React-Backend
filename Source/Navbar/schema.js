import mongoose from "mongoose";

const navItemSchema = new mongoose.Schema({
    name: String,
    link:  String, // Optional, as not all items have links
    withlink: [{
        name:  String,
        link:  String
    }]
});

const navbarSchema = new mongoose.Schema({
    logo:  String,
    links: [navItemSchema],
    navButton:String
});

const Navbar = mongoose.model('Navbar', navbarSchema);

export default  Navbar;
