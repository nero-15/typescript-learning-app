// interface Todo {
//   title: string;
//   description: string;
// }
//
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//   return { ...todo, ...fieldsToUpdate };
// }
//
// const todo1 = {
//   title: "organize desk",
//   description: "clear clutter",
// };
//
// const todo2 = updateTodo(todo1, {
//   description: "throw out trash",
// });
//
// console.log(todo1);
// console.log(todo2);
var obj = { a: 5 };
var todo = {
    title: "Delete inactive users"
};
// todo.title = "Hello";
console.log(todo);
var cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" }
};
console.log(cats.boris);
