import { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDos, addToDo }) {
  // useState hook을 사용하여 text라는 state를 생성한다.
  // 이 state는 input tag에 입력된 값을 보관한다.
  const [text, setText] = useState('');

  // input tag의 onChange 이벤트 핸들러
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  // form tag의 onSubmit 이벤트 핸들러
  const onSubmitText = (e) => {
    e.preventDefault();
    // store에 to-do를 추가하는 add action을 dispatch 한다.
    // dispatch 함수는 mapDispatchToProps로부터 전달된 addToDo 함수이다.
    addToDo(text);
    // 입력된 값을 초기화한다.
    setText('');
  };

  // state에서 가져온 toDos 배열의 요소들을 순회하면서 ToDo 컴포넌트를 생성한다.
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmitText}>
        <input type='text' value={text} onChange={onChangeText} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo, i) => (
          <ToDo key={i} text={toDo.text} id={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// store의 state를 props로 매핑하기 위한 mapStateToProps 함수
function mapStateToProps(state, ownProps) {
  //store로부터 current state를 가져와서 return시킨 값을 Home 컴포넌트의 props로 보내준다.
  //state가 변경될 때마다 호출됨.
  return { toDos: state };
}

// store의 dispatch를 props로 매핑하기 위한 mapDispatchToProps 함수
function mapDispatchToProps(dispatch, ownProps) {
  // action을 reducer 함수에게 보내는 역할을 가진 dispatch()를 Home 컴포넌트의 props로 보내준다.
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

// connect 함수를 이용하여 Home 컴포넌트를 store와 연결한다.
// mapStateToProps 함수와 mapDispatchToProps 함수를 인자로 넘긴다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
