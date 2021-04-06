const express = require('express')
const app = express()
const port = 6985
const logger = require('morgan')

app.use(logger('dev'))

const about = require('./routes/about')

app.get('/',(req,res) => {
    res.send("Hello World")
})

app.listen(port,() => {
    console.log('Server running at http://localhost:6985')
})

app.use('/about',about)