import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editModeId, setEditModeId] = useState(null); // State to track todo item in edit mode
  const [editedText, setEditedText] = useState(""); // State to store edited todo item text

  const handleEditClick = (id, text) => {
    setEditModeId(id);
    setEditedText(text);
  };

  const handleSaveEdit = (id) => {
    dispatch(updateTodo({ id, newText: editedText }));
    setEditModeId(null);
    setEditedText("");
  };

  return (
    <>
      <ul className="list-none w-9/12">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editModeId === todo.id ? ( // Render input field if todo is in edit mode
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="w-6/12 text-center bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button
                  className="w-20 text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
                  onClick={() => handleSaveEdit(todo.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="text-white w-6/12">{todo.text}</div>
                <button
                  onClick={() => handleEditClick(todo.id, todo.text)} // Toggle edit mode when clicking on todo text
                  className="w-20 text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="w-20 text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
