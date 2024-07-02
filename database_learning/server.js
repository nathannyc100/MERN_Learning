import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import firearmRoutes from './routes/firearms.js'

const app = express()
dotenv.config()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.url)
    next();
});

//routes
app.use('/api/firearms', firearmRoutes)

console.log('test')

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


