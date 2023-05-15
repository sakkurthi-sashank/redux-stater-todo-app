import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { isCompletedTodo, deleteToDo } from "../redux/todoSlice";

export const DisplayTodoList = () => {
  const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="mt-4 bg-gray-100 rounded-md">
      {todo.map((item) => (
        <div
          key={item.id}
          className="py-4 flex justify-between items-center px-4"
        >
          <div className="space-x-3 ">
            <input
              className="rounded-full border-gray-300 w-5 h-5 focus:ring-0 focus:ring-offset-0"
              type="checkbox"
              onClick={() => {
                dispatch(isCompletedTodo(item));
              }}
            />
            <span className="font-inter text-gray-600">{item.name}</span>
          </div>
          <button onClick={() => dispatch(deleteToDo(item))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-gray-700"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};
