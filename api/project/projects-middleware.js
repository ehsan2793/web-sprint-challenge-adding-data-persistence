const projectName = async (req, res, next) => {
    try {
        const { project_name } = req.body;
        if (project_name === undefined) {
            next({
                status: 404,
                message: 'Project name is required'
            })
        } else {
            next()
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    projectName,
};
