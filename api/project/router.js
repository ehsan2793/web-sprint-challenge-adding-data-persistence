const router = require('express').Router();
const rp = require('./model');
const { projectName } = require('./projects-middleware');
const { makeBolean } = require('../../helper/makeBoolean');

router.get('/', async (req, res, next) => {
    try {
        const allprojects = await rp.getAll();
        const projects = allprojects.map((project) => {
            makeBolean(project);
            return project;
        });
        res.status(200).json(projects);
    } catch (error) {
        next(error);
    }
});

router.post('/', projectName, async (req, res) => {
    const newProject = await rp.insert(req.body);
    makeBolean(newProject);
    res.status(201).json(newProject);
});

module.exports = router;
