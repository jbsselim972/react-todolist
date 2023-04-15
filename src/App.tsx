import { useEffect, useState } from "react";

import "./style.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ToggleTodo {
  (id: string | number, completed: boolean): void;
}

export interface DeleteTodo {
  (id: number | string): void;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[] | []>(() => {
    const localTodos = localStorage.getItem("ITEMS");
    return localTodos ? JSON.parse(localTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string): Todo | undefined | void | null | never[] {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  const toggleTodo = (
    id: string | number,
    completed: boolean
  ): ToggleTodo | void | undefined | null | never[] => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (
    id: string | number
  ): DeleteTodo | void | undefined | null | never[] => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
