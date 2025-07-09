import Message from "../models/Message"
import User from "../models/User"

export const getUsersForSidebar = async(req,res) => {
    try {
        const userId = req.user._id
        const filterUsers = await User.find({_id:{$ne : userId}}).select("-password")
        const unseenMessages = {}
        const promises = filterUsers.map(async(user)=>{
            const message = await Message.find({senderId:user._id , recieverId:userId , seen:false})
            if(message.length>0){
                unseenMessages[user._id] = message.length
            }
        })
        await Promise.all(promises)
        res.json({success:true , users : filterUsers , unseenMessages})
    } catch (error) {
        console.log(error.message)
        res.json({success : false , message:error.message})
    }
}

export const getMessages = async(req,res) => {
    try {
        const { id : selectedUserId } = req.params
        const myId = req.user._id
        const messages = await Message.find({
            $or : [
                {senderId : myId , recieverId : selectedUserId},
                {senderId : selectedUserId , recieverId : myId}
            ]
        })
        await Message.updateMany({senderId : selectedUserId , recieverId : myId} , {seen : true})
        res.json({success : true , messages})
    } catch (error) {
        console.log(error.message)
        res.json({success : false , message:error.message})
    }
}

export const markMessageSeen = async(req,res) => {
    try {
        const { id } = req.params
        await Message.findByIdAndUpdate( id , {seen : true})
        res.json({ success : true })
    } catch (error) {
        console.log(error.message)
        res.json({success : false , message:error.message})
    }
}