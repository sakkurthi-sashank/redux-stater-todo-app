import { AddTodo } from "./components/AddTodo";
import { CountTodo } from "./components/CountTodo";
import { DisplayTodoList } from "./components/DisplayTodoList";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-xl w-full flex pt-10 flex-col px-3">
        <div className="text-4xl text-center py-10 font-bold text-gray-700 font-inter">
          My Todo List
        </div>
        <AddTodo />
        <DisplayTodoList />
        <CountTodo />
      </div>
    </div>
  );
}
