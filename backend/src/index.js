import express from 'express';
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv';
import { connectDt } from './lib/db.js';  
import cookieParser from 'cookie-parser'

const app = express();
dotenv.config();
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`server is running on PORT:${process.env.PORT}`)
    connectDt();
})