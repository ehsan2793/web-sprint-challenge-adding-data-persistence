const router = require('express').Router()
const rt = require('./model');
const { checktask, checkproject } = require('./task-middleware')

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

router.post('/', checktask, checkproject, async (req, res) => {
    const newTask = await rt.insert(req.body)

    if (newTask.task_completed === 1) {
        newTask.task_completed = true
    } else {
        newTask.task_completed = false
    }

    res.status(201).json(newTask)

})


module.exports = router