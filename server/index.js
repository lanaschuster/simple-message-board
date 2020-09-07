const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const messages = require('./model/message.model')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: 'welcome to message board! :)'
  })
})

app.get('/messages', (req, res) => {
  messages.findAll()
    .then(messages => {
      res.status(200).json(messages)
    })
})

app.post('/messages', (req, res) => {
  messages.create(req.body)
    .then(message => {
      res.status(201).json(message)
    }).catch(error => {
      res.status(400).json(error)
    }) 
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
