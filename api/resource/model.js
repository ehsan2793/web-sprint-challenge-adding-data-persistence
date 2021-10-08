const db = require('../../data/dbConfig')

const getAll = async () => {
    const allResources = await db('resources')
    return allResources
}

const getById = async (id) => {
    const resource = await db('resources').where({ resource_id: id }).first();
    return resource;
};

const insert = async (resources) => {
    const [id] = await db('resources').insert(resources)
    return getById(id)
}


// insert into resources
// (resource_name,resource_description)
// values 
// ('pen','pen is something that you can write with')


module.exports = {
    getAll,
    getById,
    insert,
}