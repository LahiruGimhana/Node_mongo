const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')


//route import
const EmployeeRoute=require('./routes/employee')

const url = 'mongodb://localhost:27017/testdb'
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('open', () => {
    console.log('database connected...')
})


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(3001, () => {
    console.log('Server listning')
})

app.use('/api/employee', EmployeeRoute)