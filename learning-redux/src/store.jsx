import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      // mutate면 return 없이 연산만 해주면 된다.
      state.push({ id: Date.now(), text: action.payload });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});
export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
