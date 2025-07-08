import jwt from 'jsonwebtoken'
import User from '../models/User.js'
export const protectRoute = async(req,res) => {
    try {
        const token = req.headers.token
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.json({success:false , message:"No user found"})
        }
        req.user=user
        next()
    } catch (error) {
        console.log(error)
        res.json({success:true , message:error.message})
    }
}