import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
  console.log('useParams:', useParams());
  const myId = useParams().id; // useParams()는 /뒤의 값을 가져온다.
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId)); // toDos 배열에서 현재 detail 페이지에서 렌더링될 toDo를 찾는다.

  return (
    <>
      <h1>Detail</h1>
      {toDo?.text} Created at: {toDo?.id} {/* toDo가 존재한다면 해당 toDo의 text와 id 값을 렌더링한다. */}
    </>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return { toDos: state }; // store에서 가져온 state를 toDos props로 전달한다.
}

export default connect(mapStateToProps)(Detail); // connect 함수를 사용하여 store에 연결한다.
