const express = require('express')
const app = express()
const routes = require('./route')
const cors = require('cors')

const options = {origin:'http://localhost:3000'}

app.use(cors(options))

app.use(express.json())

app.use('/user', routes)

app.listen(3349, ()=>{
    console.log('server is running on http://localhost:3349');
})