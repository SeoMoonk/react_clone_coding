import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//index.html의 id가 root인 태그를 찾아서, 내용을 덮어 씌워준다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> //찾아낸 id가 root인 태그에 App의 내용을 찾아 렌더링 해줌.
);

reportWebVitals();