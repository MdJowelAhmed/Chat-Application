// const { Router } = require("express");
import Router from "express"
import {login, signup} from "../controlar/AuthControlar.js"
// import { signup } from "server/controlar/AuthControlar";
// import { signup } from "server/controlar/AuthControlar.js";
// import { signup } from "../controlar/AuthControlar.js";



const AuthRoutes=Router();
AuthRoutes.post("/signup",signup)
AuthRoutes.post('/login',login)

export default AuthRoutes;