const router = require('express').Router()
const rt = require('./model');


router.get('/', async (req, res) => {
    const allTasks = await rt.getAll()

    allTasks.map(task => {
        if (task.task_completed === 1) {
            task.task_completed = true
        } else {
            task.task_completed = false
        }
    })
    res.status(200).json(allTasks);
})

module.exports = router