import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = 'ADD'; //action type에서 오타에 의한 버그를 방지하기 위함.
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  //countModifier: reducer
  //count: current state
  //count = 0 을 쓰는 이유는 current state가 undefind일 경우 0 초기화 해주기 위함이다.
  //action: action
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const onChange = () => {
  number.innerText = countStore.getState();
};

const countStore = createStore(countModifier); //store

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
