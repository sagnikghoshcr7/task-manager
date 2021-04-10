const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Site is corrently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is up on port' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  const user = await User.findById('some_id_like_3sdf9sdf649sdg8s')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()