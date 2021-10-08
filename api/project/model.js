const db = require('../../data/dbConfig');

const getAll = async () => {
    const allprojects = await db('projects').select(
        'project_name',
        'project_description',
        'project_completed',
    );
    return allprojects;
};

const getById = async (id) => {
    const project = await db('projects').where({ project_id: id }).first();
    return project;
};

const insert = async (project) => {
    const [id] = await db('projects').insert(project);
    return getById(id);
};

module.exports = {
    getAll,
    getById,
    insert,
};
