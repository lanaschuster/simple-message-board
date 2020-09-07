const monk = require('monk')
const connectionString = 'localhost/messageboard'
const database = monk(connectionString)

module.exports = database
