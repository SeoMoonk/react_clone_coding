import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './routers/About';
import Home from "./routers/Home";
import Navigation from "./components/Navigation";
import Detail from "./routers/Detail";
function App(){
    return (
        <BrowserRouter>
            <Navigation /> {/* 버전 업 되면서, Route로 감싸주지 않으면 사용할 수 없음. => Routes 밖으로 빼줌*/}
            <Routes>
                {/* 버전 업 되면서, component props가 아닌 element props를 받음.*/}
                <Route path="/about" element={<About/>}></Route>
                <Route path="/:page" element={<Home/>} />
                <Route path="/detail-movie" element={<Detail />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
