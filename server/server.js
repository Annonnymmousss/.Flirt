import express from 'express'
import "dotenv/config"
import cors from 'cors'
import http from 'http'
import { connectDB } from './lib/db.js'
import userRouter from './routes/userRoutes.js'
const PORT = process.env.PORT 
const app = express();
const server = http.createServer(app)
app.use(express.json({limit:"4mb"}))
app.use(cors())
app.use('/api/status',(req,res)=>res.send("server started"))
app.use('/api/auth' , userRouter)
await connectDB()
server.listen(PORT , ()=>{console.log(`server started at port ${PORT}`)})
