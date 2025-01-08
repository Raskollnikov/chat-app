import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js"

export const getUsersForSidebar=async(req,res)=>{

    try {
        const loggedInUser= req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select('-password');

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error(error.message)
        res.status(500).json({error:"server error"})
    }
}

export const getMessages=async(req,res)=>{
    try {
        const {id} = req.params;
        const myId=res.user._id;

        const messages=await Message.find({$or:[{senderId:myId,receiverId:id},{senderId:id, receiverId:myId}]})

        res.status(200).json(messages)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"server error"})
    }
}

export const sendMessage=async(req,res)=>{

    try {
        const {text,image}=req.body;
        const {id:receiverId}=req.params
        const senderId=req.user._id;

        let image_url;
        if(image){
            const uploadResponse=await cloudinary.uploader.upload(image)
            image_url=uploadResponse.secure_url;
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            text,
            image:image_url
        })
        await newMessage.save();

        res.status(201).json(newMessage)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:"server error"})
    }
} 