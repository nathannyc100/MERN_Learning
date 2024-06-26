import dotenv from 'dotenv'
import express from 'express'

const app = express()
dotenv.config()

app.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app'})
})

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})

