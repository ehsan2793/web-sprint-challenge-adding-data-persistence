const router = require('express').Router();
const rt = require('./model');
const { checktask, checkproject } = require('./task-middleware');
const { makeBoleanTask } = require('../../helper/makeBoolean');

router.get('/', async (req, res, next) => {
    try {
        const allTasks = await rt.getAll();
        allTasks.map((task) => {
            makeBoleanTask(task);
        });
        res.status(200).json(allTasks);
    } catch (error) {
        next();
    }
});

router.post('/', checktask, checkproject, async (req, res) => {
    const newTask = await rt.insert(req.body);
    makeBoleanTask(newTask);
    res.status(201).json(newTask);
});

module.exports = router;
