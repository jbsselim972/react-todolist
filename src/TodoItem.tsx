import React from "react";
import { DeleteTodo, Todo, ToggleTodo } from "./App";

interface TodoItemProps {
  id: number | string;
  completed: boolean;
  title: string;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

function TodoItem({
  id,
  completed,
  title,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        <i className="fa fa-trash"></i>Delete
      </button>
    </li>
  );
}

export default TodoItem;
