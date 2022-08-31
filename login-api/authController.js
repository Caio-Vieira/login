require('dotenv').config()
const jwt = require('jsonwebtoken')

const users = []

class Login {

    static authUser(req, res) {
        const email = req.body.email
        const password = req.body.password
        const hasUser = users.filter((item) => {
            return item.email === email
        })

        const hash = jwt.sign({ id: hasUser[0].id, email }, process.env.SECRET_KEY)

        if (hasUser) {
            return res.status(200).json({hasUser})
        }
    }

    static createUser(req, res) {
        const email = req.body.email
        const password = req.body.password
        users.push({ id:Login.generateID(), email, password })
        return res.status(200).json(users)
    }

    static generateID() {
        return (Math.random() * 1000).toString(36).slice(3)
    }

}



module.exports = {Login}