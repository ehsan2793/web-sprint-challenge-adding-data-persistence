// build your `/api/resources` router here
const rm = require('./model');
const { resourceIsUnique } = require('./resource-middleware');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
    try {
        const allResources = await rm.getAll();
        res.status(200).json(allResources);
    } catch (error) {
        next(error);
    }
});

router.post('/', resourceIsUnique, async (req, res) => {
    const newResource = await rm.insert(req.body);
    res.status(201).json(newResource);
});

module.exports = router;
