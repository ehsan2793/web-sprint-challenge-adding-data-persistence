const { getById } = require('../project/model');
const checktask = async (req, res, next) => {
    try {
        const { task_description, project_id } = req.body;
        if (task_description === undefined || project_id === undefined) {
            console.log('Task description')
            next({
                status: 404,
                message: 'Project description is required'
            })
        } else {
            next()
        }
    } catch (error) {
        next(error);
    }
};


const checkproject = async (req, res, next) => {
    try {
        const projectIdExist = await getById(req.body.project_id)
        if (projectIdExist) {
            next()
        } else {
            next({
                status: 404,
                message: `Project id of ${req.body.project_id} does npt exist`
            })
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    checktask,
    checkproject,
};
