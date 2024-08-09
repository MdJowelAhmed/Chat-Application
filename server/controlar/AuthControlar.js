import User from "../models/UserModels.js";
import jwt from "jsonwebtoken"
// import User from "server/models/UserModels.js";

const maxAge=3 * 24 * 60 * 1000;

const createToken=(email,userId)=>{
    return jwt.sign({email,userId},process.env.JWT_TOKEN, {expiresIn:maxAge})
}
export const signup = async (req, res, next) => {
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).send("Email and Password is required")
        }
        const user =await User.create({email,password})
        res.cookie("jwt",createToken(email,user.id),{
            maxAge,
            secure:true,
            sameSite:"None"
        })
        return res.status(201).json({user:{
            id:user.id,
            email:user.email,
            profileSetUp:user.profileSetUp,
        }})
       
    }
    catch (error){
        console.log({ error })
        return res.status(500).send("Server internal error")
    }
}