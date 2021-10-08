// build your `/api/resources` router here
const rm = require('./model')
const { resourceIsUnique } = require('./resource-middleware');


const router = require('express').Router()

router.get('/', async (req, res) => {
    const allResources = await rm.getAll()
    res.status(200).json(allResources)
})

router.post('/', resourceIsUnique, async (req, res) => {   ///  fix this end point 
    const something = await rm.insert(req.body)
    res.status(201).json(something)

})

module.exports = router