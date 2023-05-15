import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const CountTodo = () => {
  const todo = useSelector((state: RootState) => state.todo.length);

  return (
    <div className="text-center font-inter font-medium text-gray-700 pt-16">
      Number Of Todo's {todo}
    </div>
  );
};
