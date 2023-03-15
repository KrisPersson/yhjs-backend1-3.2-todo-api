const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

let allTodos = [
    {
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Do laundry',
        id: 3,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 4,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 5,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 6,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 7,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 8,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 9,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 10,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 11,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 12,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 13,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 14,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 15,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 16,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 17,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 18,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 19,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 20,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 21,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 22,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 23,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 24,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },{
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Do laundry',
        id: 1,
        done: false,
        createdAt: new Date()
    },
    {
        todo: 'Buy groceries',
        id: 2,
        done: false,
        createdAt: new Date()
    },
]

app.get('/api/todo', (request, response) => {

    const userInput = request.query.page || 1
    const endIndex = Number(userInput.toString() + 0)
    const startIndex = endIndex - 10
    const result = {
        success: true,
        todos: allTodos.length > 50 ? allTodos.slice(startIndex, endIndex) : allTodos
    }
    response.json(result)
})

app.post('/api/todo', (request, response) => {

    let newTodo = request.body

    const result = {
        success: false,
        allTodos: [...allTodos]
    }    

    if (newTodo.hasOwnProperty('todo') &&
        newTodo.hasOwnProperty('done')
        ) {
            newTodo = {...newTodo, id: getLastId() + 1, createdAt: new Date()}
            allTodos.push(newTodo)
            result.success = true
            result.allTodos = [...allTodos]
        }

    response.json(result)
})

app.delete('/api/todo/:id', (request, response) => {

    const id = request.params.id
    const newArr = []

    allTodos.forEach(todo => {
        if (todo.id != id) {
            newArr.push(todo)
        }
    })

    const result = {
        success: newArr.length !== allTodos.length,
        allTodos: [...newArr]
    }

    allTodos = [...newArr]
    response.json(result)
})

function getLastId() {
    if (allTodos.length > 0) {
        return allTodos[allTodos.length - 1].id
    } else {
        return 0
    }
}

app.listen(port, () => {
    console.log('Started server')
})