
const router = require('express').Router()
const rp = require('./model')
const { projectName } = require('./projects-middleware');


router.get('/', async (req, res) => {
    const allprojects = await rp.getAll()
    const projects = allprojects.map(project => {
        if (project.project_completed === 1) {
            project.project_completed = true
        } else {
            project.project_completed = false
        }

        return project;
    })
    res.status(200).json(projects);
})

router.post('/', projectName, async (req, res) => {
    const newProject = await rp.insert(req.body)
    if (newProject.project_completed === 1) {
        newProject.project_completed = true
    } else {
        newProject.project_completed = false
    }
    res.status(201).json(newProject)

})




module.exports = router
