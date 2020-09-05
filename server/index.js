const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})