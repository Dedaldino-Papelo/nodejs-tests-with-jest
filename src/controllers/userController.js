const users = require('../database/User')
const { v4: uuidv4 } = require('uuid');

const createUser = (req, res) => {
    const {name, email} = req.body

    const User = {
        id:uuidv4(),
        name,
        email
    }
   users.push(User)
   return res.json(User)

}

const listUsers = (req,res) => {
    return res.json(users)
}

module.exports = {createUser,listUsers}