const db = require('../../data/dbConfig')

const getAll = async () => {
    const tasks = await db('tasks as t')
        .leftJoin("projects as p", 'p.project_id', 't.project_id')
        .select('t.*', 'p.project_name', 'project_description')
    return tasks
}

const getById = async (id) => {
    const project = await db('tasks')
        .where({ project_id: id }).first();
    return project;
};

const insert = async (task) => {
    const [id] = await db('tasks').insert(task)
    return getById(id)
}




module.exports = {
    getAll,
    getById,
    insert,
}
