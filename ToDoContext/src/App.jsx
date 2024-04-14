import { useEffect, useState } from "react";
import "./App.css";
import { TodoContext, TodoProvider, useTodo } from "./context/index";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };

  const updateTodo = (id, todo) => {
    settodos((prevTodo) =>
      prevTodo.map((prev) => (prev.id === id ? todo : prev))
    );
  };

  const deleteTodo = (id) => {
    settodos((prevTodo) => prevTodo.filter((prev) => prev.id !== id));
  };

  const toggleComplete = (id) => {
    settodos((prevTodo) =>
      prevTodo.map((prev) =>
        prev.id === id ? { ...prev, completed: !prev.completed } : prev
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-5 ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
