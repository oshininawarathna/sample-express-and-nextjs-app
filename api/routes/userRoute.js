import express from "express"
import {getUsers,create} from "../controller/userController.js"
const route =express.Router();


route.post("/create",create)

route.get("/get",getUsers)
export  default route;