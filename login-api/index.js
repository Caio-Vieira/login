const express = require('express')
const app = express()
const routes = require('./route')

app.use(express.urlencoded({extended:true}))

app.use('/user', routes)

app.listen(3349, ()=>{
    console.log('server is running on http://localhost:3349');
})