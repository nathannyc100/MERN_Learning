import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app'})
})

app.listen(4000, () => {
    console.log("listening on port 4000")
})
