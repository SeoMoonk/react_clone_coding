import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Detail(){
    const location = useLocation();
    const navigate = useNavigate();     //자동 이동할 수 있게 해주는 친구
    console.log('location',location);

    //함수형 컴포넌트에서 생명주기 함수를 대체하기 위한 리액트 훅 = useEffect
    useEffect(()=>{

        //이미지를 클릭해서 들어온 것이 아닌, url 조작으로 들어와서 state가 없을 경우 -> home으로 리다이렉션
        if(location.state===null){
            navigate("/");
        }
    });
    if(location.state){
        return (
        <div className="about__container">
            <div className="movie">
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                <h3 className="movie__title">{location.state.title}</h3>
                <h5 className="movie__year">{location.state.year}</h5>
                <p className="movie__summary">{location.state.summary.slice(0,180)}...</p>
            </div>
        </div>
        );
    } else {
        return null;
    }
    
}

export default Detail;
