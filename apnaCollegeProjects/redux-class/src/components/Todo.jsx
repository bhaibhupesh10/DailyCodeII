// Todo.js

import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteTodo(id));
  };

  const toggleDoneHandler = (id) => {
    console.log("toggleDone", id);
    dispatch(toggleDone(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => toggleDoneHandler(todo.id)}>Mark as Done</button>
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
