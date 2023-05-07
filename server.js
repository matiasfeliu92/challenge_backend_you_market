const express = require('express')
const app = express()
const router = require('./src/routes/mutation.routes.js')

const port = process.env.PORT || 4000

app.use(express.json())

app.use('/', router)

app.listen(port, ()=>{
    console.log("server on port", port)
})