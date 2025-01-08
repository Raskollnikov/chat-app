import mongoose from 'mongoose'

export const connectDt=async()=>{
    try {
        const connection= await mongoose.connect(process.env.MONGODB_URI)
        console.log("connection successful")
    } catch (error) {
        console.log(error)
    }
}