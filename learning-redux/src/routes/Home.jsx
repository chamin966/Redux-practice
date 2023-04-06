import { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

// { toDos, addToDo }는 props의 구조분해할당
// props.toDos, props.addToDo 할 필요없어짐.
function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onSubmitText = (e) => {
    e.preventDefault();
    addToDo(text);
    setText('');
  };

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

function mapStateToProps(state, ownProps) {
  //store로부터 current state를 가져와서 return시킨 값을 Home 컴포넌트의 props로 보내준다.
  //state가 변경될 때마다 호출됨.
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  //action을 reducer 함수에게 보내는 역할을 가진 dispatch()를 Home 컴포넌트의 props로 보내준다.
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
