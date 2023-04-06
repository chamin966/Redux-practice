import { configureStore, createSlice } from '@reduxjs/toolkit';

// createSlice를 이용하여 toDos slice를 생성한다.
const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      // ToDo를 추가하는 reducer 함수
      // 현재 state에 action.payload로 전달된 text를 가진 ToDo를 추가한다.
      // createSlice를 이용하면 state를 mutate 할 수 있다.
      state.push({ id: Date.now(), text: action.payload });
    },
    remove: (state, action) => {
      // ToDo를 삭제하는 reducer 함수
      // 현재 state에서 action.payload로 전달된 id를 가진 ToDo를 삭제한다.
      // createSlice를 이용하면 state를 mutate 할 수 있다.
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

// createSlice로부터 생성된 reducer 함수와 action creators를 export한다.
// 이것들은 Home.jsx, ToDo.jsx, Detail.jsx 등에서 사용된다.
export const { add, remove } = toDos.actions;

// configureStore를 이용하여 store를 생성한다.
// reducer는 toDos reducer 함수를 사용한다.
export default configureStore({ reducer: toDos.reducer });
