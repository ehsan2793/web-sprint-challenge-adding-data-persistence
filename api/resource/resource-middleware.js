const rm = require('./model');

const resourceIsUnique = async (req, res, next) => {
    try {
        const nameExist = await rm.checkname(req.body.resource_name);
        if (nameExist === undefined) {
            next();
        } else {
            next({
                status: 400,
                message: `resource with the name of ${req.body.resource_name} already exists`,
            });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    resourceIsUnique,
};
