import { connect } from 'react-redux';
import { remove } from '../store';
import { Link } from 'react-router-dom';

function ToDo({ text, id, onDELBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDELBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDELBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);

//a 태그 쓰면 새로고침 돼서 데이터 다 날아감
