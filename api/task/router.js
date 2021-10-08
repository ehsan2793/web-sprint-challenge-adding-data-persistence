const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json("hello form task")
})

module.exports = router