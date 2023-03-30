const { getAllTodos, postTodo, deleteTodo } = require('../model/todo')

async function getTodosCtrl(request, response) {

    const allTodos = await getAllTodos()

    const userInput = request.query.page || 1
    const endIndex = Number(userInput.toString() + 0)
    const startIndex = endIndex - 10
    const result = {
        success: true,
        todos: allTodos.length > 50 ? allTodos.slice(startIndex, endIndex) : allTodos
    }
    response.json(result)
}

async function postTodoCtrl(request, response) {

    const addedTodo = await postTodo(request.body)
    const allTodos = await getAllTodos()

    response.json({ success: true, allTodos: [...allTodos] })
}

async function deleteTodoCtrl(request, response) {
    const id = request.params.id
    
    const todosDeleted = await deleteTodo(id)

    if (todosDeleted === 0) {
        response.json({ success: false, message: 'ID does not match any items in the database'})
    } else {
        const allTodos = await getAllTodos() 
        response.json({ success: true, message: 'Item successfully deleted', todos: allTodos })
    }
}


module.exports = { getTodosCtrl, postTodoCtrl, deleteTodoCtrl }
