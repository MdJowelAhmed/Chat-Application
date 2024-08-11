// const { Router } = require("express");
import Router from "express"
import {getUserInfo, login, signup} from "../controlar/AuthControlar.js"
import { verifyToken } from "../middleware/AuthMiddleware.js";




const AuthRoutes=Router();
AuthRoutes.post("/signup",signup)
AuthRoutes.post('/login',login)
AuthRoutes.get('/userInfo',verifyToken, getUserInfo)

export default AuthRoutes;