import mongoose from 'mongoose';

// Define a schema for the footer items
const footerItemSchema = new mongoose.Schema({
    name: { type: String},
    link: { type: String } // Optional, as not all items have links
});

// Define the main footer schema
const footerSchema = new mongoose.Schema({
    footerlogo: { type: String },
    foooterp1: { type: String},
    footerp2: { type: String },
    footerspan: { type: String },
    products: {
        name: { type: String },
        items: [{ type: String }]
    },
    company: {
        name: { type: String },
        items: [footerItemSchema]
    },
    support: {
        name: { type: String },
        items: [{ type: String }]
    },
    partner: {
        name: { type: String },
        items: [{ type: String }]
    },
    account: {
        name: { type: String },
        items: [footerItemSchema]
    }
});

// Create a model from the schema
const Footer = mongoose.model('Footer', footerSchema);

export default Footer;
