const db = require('../../data/dbConfig');

const getAll = async () => {
    const allResources = await db('resources');
    return allResources;
};

const getById = async (id) => {
    const resource = await db('resources').where({ resource_id: id }).first();
    return resource;
};

const insert = async (resources) => {
    const [id] = await db('resources').insert(resources);
    return getById(id);
};

const checkname = async (name) => {
    const found = await db('resources')
        .where('resource_name', 'like', `%${name}%`)
        .first();
    return found;
};

module.exports = {
    getAll,
    getById,
    insert,
    checkname,
};
