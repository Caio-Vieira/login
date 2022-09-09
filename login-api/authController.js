require('dotenv').config()
const jwt = require('jsonwebtoken')
const users = []
const {registerValidate, loginValidate} = require('./Validate')

class Login {

    static authUser(req, res) {

        const email = req.body.email
        const password = req.body.password

        try {

            const { error } = loginValidate(req.body)

            if (error) {
                return res.status(400).json({ message: error.message })
            }

            const user = users.filter((item) => {
                return item.email === email && item.password === password
            })

            if (user.length !== 0) {
                const token = jwt.sign({ id: user[0].id, email }, process.env.SECRET_KEY)
                const data = {
                    username: user[0].username,
                    email: user[0].email,
                    token
                }

                return res.status(200).json(data)
            }
            else {
                return res.status(400).json({ message: 'email or password incorret' })
            }

        }
        catch (error) {
            return res.status(400).json({ message: error.message })
        }

    }

    static createUser(req, res) {

        const email = req.body.email
        const username = req.body.username
        const password = req.body.password

        try {

            const { error } = registerValidate(req.body)

            if (error) {
                return res.status(400).json({ message: error.message })
            }

            const findUser = users.filter((item) => {
                return item.email === email
            })

            if (findUser.length !== 0) {
                return res.status(400).json({ message: "email already exist" })
            }

            users.push({ id: Login.generateID(), username, email, password })

            return res.status(200).json(users)

        }
        catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }

    static generateID() {
        return (Math.random() * 1000).toString(36).slice(3)
    }

}



module.exports = { Login }