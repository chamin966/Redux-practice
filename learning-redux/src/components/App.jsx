import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact={true} element={<Home />}></Route>
        <Route path='/:id' exact={true} element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
react-router-dom 버전 6부터 변경사항이 있습니다.

[ 변경사항 ]
react-route-dom V6이면,
1. Route를 Routes로 한번 더 감싸줘야함.
(순서: Router > Routes > Route)
이용방법: https://stackoverflow.com/questions/69832748/error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element


2. component 속성 없어짐
component대신 element 속성 이용.
이용방법: https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element
*/
