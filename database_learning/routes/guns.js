import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'get all guns'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'get specific gun'})
})

router.post('/', (req, res) => {
    res.json({mssg: 'add new gun'})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete a gun'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'rename a gun'})
})

export default router
