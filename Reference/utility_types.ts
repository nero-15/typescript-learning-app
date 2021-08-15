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

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 };

// interface Todo {
//   title: string;
// }
//
// const todo: Readonly<Todo> = {
//   title: "Delete inactive users",
// };
//
// // todo.title = "Hello";
// console.log(todo)

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

console.log(cats.boris);

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }
//
// type TodoPreview = Pick<Todo, "title" | "completed">;
//
// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

console.log(todo)
