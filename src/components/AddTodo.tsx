import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { useState } from "react";

export const AddTodo = () => {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState<string>("");

  const handleAddTodo = () => {
    if (todoName) {
      dispatch(addTodo({ name: todoName, isCompleted: false }));
    }
  };

  return (
    <div className="flex space-x-3">
      <input
        type="text"
        onChange={(e) => setTodoName(e.target.value)}
        className="font-inter antialiased rounded-lg px-3 max-w-lg w-full py-3 focus:outline-none"
        placeholder="Add Your Favorite Todo's"
      />
      <button
        className="bg-gray-900 text-white px-4 rounded-md"
        onClick={handleAddTodo}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className=""
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
    </div>
  );
};
