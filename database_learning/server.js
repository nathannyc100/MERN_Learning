import dotenv from 'dotenv'
import express from 'express'

import gunsRoutes from './routes/guns.js'

const app = express()
dotenv.config()

//middleware
app.use(express.json())

app.use('/api/guns', gunsRoutes)

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})

