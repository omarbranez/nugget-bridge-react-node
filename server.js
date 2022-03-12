import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../muttmap-node-backend/db/connect'

const app = express()

dotenv.config()

const port = process.env.PORT || 5000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`SERVER LISTENING ON PORT ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
