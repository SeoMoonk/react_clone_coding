import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import './Home.css';
import { useParams } from "react-router-dom";
import Pagebar from "../components/Pagebar";

//클래스형 컴포넌트에서 함수형 컴포넌트로 변경되었다.
function Home() {
    //** useState **
    // ex) movies라는 state를 사용할 것인데, 이를 관리하기 위해 setMovies 라는 것을 사용할 것이고 초기값은 [] 이다.
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    let params = useParams();   
    /*
        라우터에서 url을 통해 추가 정보가 들어오는 것은 params가 이해하고 받아들인다. (page 변화)
        요약 : 동적 라우팅 (동적 라우팅은 URL 경로의 특정 부분이 변경될 때 해당 변경된 값을 활용하여 
        컴포넌트를 렌더링하거나 작업을 수행하는 것을 의미)
    */


    //리액트 훅 Hook (생명주기 함수 -> "useEffect" 라는 리액트 훅으로 변경)
    //componentDidMount,componentDitUpdate,componentWillUmmount 세가지 역할을 return에서 전부 수행함.
    useEffect(() => {
        console.log('didMount');

        //전에는 응답 완료를 보장받기 위한 수단으로 async, await을 사용했는데,
        //여기서는 fetch와 then을 사용했다.
        fetch(`https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=${params.page}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                /* 
                    1. fetch 함수를 사용하여 위의 url에 get 요청을 보내고 
                    2. 요청에 대한 응답 데이터를 json 타입으로 받아온다.
                    3. 얻어온 데이터를 가지고 useState를 통해 선언한 친구들의 내용을 변환해준다.
                    4. (error) 혹시 에러가 있을 경우 에러코드를 콘솔에 출력한다.
                    5. , [params.page] 이러한 동작들은 params.page에 변화가 있을 경우에만 수행된다.  
                */

                setTotalCount(data.data.movie_count);
                let movies = data.data.movies;
                setIsLoading(false);
                setMovies(movies);
            })
            .catch((e) => console.log(e));

        return () => {
            console.log("willUmmount");
        }
        //params.page는? react-router-dom -> useParams -> params -> params.page 
        //환경이 변경되었을 때만 수행되도록 하고싶어! => page가 변경되었을때만 화면의 내용이 변경됨(메서드가 수행됨) = params.page
    }, [params.page]);
    return (
        <div>
            <Pagebar totalCount={totalCount} page={params.page} perPage={10} />
            <section className="container">
                {/* 로딩되기 전 vs 로딩된 후 => 조건부 렌더링 이라고 함.*/}
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {/* movie 배열을 순회하며 각 영화 정보에 대한 컴포넌트 "Movie" 를 생성 */}
                        {
                            movies.map((movie) => {
                                //console.log(movie);
                                return (
                                    <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}
                                    />
                                );
                            })
                        }

                    </div>
                )
                }

            </section>
        </div>
    );
}

export default Home;
