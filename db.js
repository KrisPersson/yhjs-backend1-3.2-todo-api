const nedb = require('nedb-promises')
const todosDb = new nedb({ filename: 'todos.db', autoload: true })

module.exports = { todosDb }
