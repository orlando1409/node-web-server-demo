import http from 'http';
import express from 'express';
import mongoose from 'mongoose';

import todos from './controllers/todos';

const app = express();

app.use('/todos', todos);

mongoose.connect('mongodb://localhost/todo-api')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err))

app.listen(3005, () => {
  console.log('listening on 3005')
})

//TODO: delete this code
app.get('/', (req, res) => {
    res.send('Hello World')
})