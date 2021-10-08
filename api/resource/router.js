// build your `/api/resources` router here
const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json("hello form resources")
})

module.exports = router