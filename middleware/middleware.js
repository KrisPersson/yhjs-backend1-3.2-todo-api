
async function checkPostTodoBody(request, response, next) {

    let newTodo = request.body

    if (newTodo.hasOwnProperty('todo')
        ) {
            next()
        } else {
            response.status(400).json({ success: false, message: 'Wrong data in body' })
        }
}

async function checkDeleteTodoParams(request, response, next) {

    next()
//     let todo = request.body
//     if (todo.hasOwnProperty('id')
//         ) {
//             next()
//         } else {
//             response.status(400).json({ success: false, message: 'Wrong data in body' })
//         }
// }
}

module.exports = { checkPostTodoBody, checkDeleteTodoParams } 
