import React from 'react';
import { Link } from 'react-router-dom';
//앵커 태그의 href는 눌렸을 때 전체 페이지를 새로고침 하는 특성이 있는데,
//react-router-dom의 Link 컴포넌트를 사용하면 이를 방지할 수 있다.
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;