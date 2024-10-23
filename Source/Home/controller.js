
import express from "express";
import { create, get } from "./service.js";



const route = express.Router();

route.post('/',create);
route.get('/', get)

export default route;

