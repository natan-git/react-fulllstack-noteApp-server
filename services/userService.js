const dbService = require('./db.service')
const ObjectId = require('mongodb').ObjectId

async function checkCredentials(loginData) {
    const criteria = {};
    criteria.nickname=loginData
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne();
        return user
    } catch (err) {
        console.log('ERROR: cannot find user')
        throw err;
    }

}
// async function query(filterBy = {}) {
//     const criteria = {};
//     if (filterBy.name) {
//         criteria.name = {$regex:`${filterBy.name}`}
//     }
//     const collection = await dbService.getCollection('toy')
//     try {
//         const customers = await collection.find(criteria).toArray();
//         return customers
//     } catch (err) {
//         console.log('ERROR: cannot find customers')
//         throw err;
//     }
// }

module.exports = { checkCredentials }