const { todosDb } = require('../db.js')

async function getAllTodos() {
    return await todosDb.find({})
}

async function postTodo(todoObj) {
   return await todosDb.insert(
    {
        todo: todoObj.todo,
        done: false,
        createdAt: new Date()
    })
}

async function deleteTodo(id) {
    return await todosDb.remove({ "_id": id })
}

module.exports = { getAllTodos, postTodo, deleteTodo }
