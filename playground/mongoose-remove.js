const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemove({_id: '5aa5cba4d291eb1d452632b7'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5aa5cba4d291eb1d452632b7').then((todo) => {
  console.log(todo);
});