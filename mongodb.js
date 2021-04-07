// CRUD operations

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  db.collection('users').insertOne({
    _id: id,
    name: 'Sankha',
    age: 20
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user')
    }

    console.log(result.ops)
  })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Arnab',
  //     age: 21
  //   }, {
  //     name: 'Sayantan',
  //     age: 22
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents!')
  //   }

  //   console.log(result.ops)
  // })
})
