import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    const msg = "Welcome"
    res.send(msg)
})

export default router