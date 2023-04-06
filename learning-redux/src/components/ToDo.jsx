import { connect } from 'react-redux';
import { remove } from '../store';
import { Link } from 'react-router-dom';

function ToDo({ text, id, onDELBtnClick }) {
  //props로 text, id, onDELBtnClick을 받아서 ToDo 컴포넌트를 렌더링한다.
  //text는 할 일의 내용, id는 할 일의 고유한 아이디 값이다.
  //onDELBtnClick은 할 일을 삭제하기 위한 콜백 함수다.
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      {/* Link 컴포넌트를 사용하여 각 할 일의 id 값을 갖고 Detail 페이지로 이동하는 링크를 생성한다. */}
      <button onClick={onDELBtnClick}>DEL</button>
      {/* 삭제 버튼을 클릭하면 onDELBtnClick 함수를 실행힌다. */}
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDELBtnClick: () => dispatch(remove(ownProps.id)),
    // onDELBtnClick 함수를 호출하면, store의 remove 액션을 dispatch하고 ownProps.id 값으로 할 일을 삭제한다.
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
//connect 함수를 사용하여 ToDo 컴포넌트를 redux store에 연결한다.
