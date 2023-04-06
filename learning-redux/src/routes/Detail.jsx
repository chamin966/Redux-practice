import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
  console.log('useParams:', useParams());
  const myId = useParams().id; //useParams()는 /뒤의 값을 가져 옴
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <>
      <h1>Detail</h1>
      {toDo?.text} Created at: {toDo?.id}
    </>
  );
}

function mapStateToProps(state) {
  //ES6로 넘어오면서 ownProps에서 match 등의 내장 함수를 사용할 수 없게 됨
  console.log(state);
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);

// ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.
