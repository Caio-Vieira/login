const express = require('express')
const app = express()
const routes = require('./route')
const cors = require('cors')
const PORT = process.env.PORT


app.use(cors())

app.use(express.json())

app.use('/user', routes)

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})