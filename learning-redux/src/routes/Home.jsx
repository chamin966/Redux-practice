import { useState } from 'react';

function Home() {
  const [text, setText] = useState('');

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onSubmitText = (e) => {
    e.preventDefault();
    console.log(text);
    setText('');
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmitText}>
        <input type='text' value={text} onChange={onChangeText} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
