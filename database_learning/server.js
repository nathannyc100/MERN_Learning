import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import gunsRoutes from './routes/firearms.js'

const app = express()
dotenv.config()

//middleware
app.use(express.json())

//routes
app.use('/api/guns', gunsRoutes)

//db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to db and listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


