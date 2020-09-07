const database = require('../database/connection.js')
const Joi = require('joi')

const schema = Joi.object().keys({
  username: Joi.string().alphanum().required(),
  subject: Joi.string().required(),
  message: Joi.string().max(500).required(),
  imageUrl: Joi.string().uri({
    scheme: [
      /https?/
    ]
  })
})

const messages = database.get('messages')

function findAll() {
  return messages.find()
}

function create(message) {
  if (!message.username)
    message.username = 'Anonymous'

  const result = schema.validate(message)
  
  if (!result.error) {
    message.created = new Date()
    return messages.insert(message)
  }

  return Promise.reject(result.error)
}

module.exports = {
  findAll,
  create
} 