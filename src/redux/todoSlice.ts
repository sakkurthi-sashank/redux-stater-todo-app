import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToDoState {
  id?: number;
  name: string;
  isCompleted: boolean;
}

const initialState: ToDoState[] = [];

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ToDoState>) => {
      action.payload.id = state.length + 1;

      return [...state, action.payload];
    },
    deleteToDo: (state, action: PayloadAction<ToDoState>) => {
      return state.filter((item) => item.name !== action.payload.name);
    },
    isCompletedTodo: (state, action: PayloadAction<ToDoState>) => {
      const objId = state.findIndex(
        (item) => item.name === action.payload.name
      );
      state[objId].isCompleted = !state[objId].isCompleted;
    },
  },
});

export const { addTodo, deleteToDo, isCompletedTodo } = todoSlice.actions;

export default todoSlice.reducer;
