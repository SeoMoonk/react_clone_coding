import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {

  
  /* React Router v5 에서는 HashRouter -> Route 가 가능 했지만
  v6 부터는 Router -> Routes -> Route 구조를 사용한다. */

  return (
    <Router>
      <Navigation />  {/* 버전 업 되면서, Route로 감싸주지 않으면 사용할 수 없음. => Routes 밖으로 빼줌*/}
      <Routes>
        {/* 버전 업 되면서, component props가 아닌 element props를 받음.*/}
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
