const { Router } = require('express')
const router = Router()

const { checkPostTodoBody, checkDeleteTodoParams } = require('../middleware/middleware')
const { getTodosCtrl, postTodoCtrl, deleteTodoCtrl } = require('../controllers/todoController')

router.get('/', getTodosCtrl)

router.post('/', checkPostTodoBody, postTodoCtrl)

router.delete('/:id', checkDeleteTodoParams, deleteTodoCtrl)


module.exports = { todoRouter: router }
