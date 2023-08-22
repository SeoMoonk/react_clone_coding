import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import './Home.css';
import { useParams } from "react-router-dom";
import Pagebar from "../components/Pagebar";

//클래스형 컴포넌트에서 함수형 컴포넌트로 변경되었다.
function Home() {
    //** useState **
    // ex) movies라는 state를 사용할 것인데, 이를 관리하기 위해 setMovies 라는 것을 사용할 것이고 초기값은 [] 이다.
    const [isLoading, setIsLocation] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    let params = useParams();       //라우터에서 url을 통해 추가 정보가 들어오는 것은 params가 이해하고 받아들인다. (page 변화)

    //훅 Hook (생명주기 함수 -> "useEffect" 라는 리액트 훅으로 변경)
    //componentDidMount,componentDitUpdate,componentWillUmmount 세가지 역할을 return에서 전부 수행함.
    useEffect(() => {
        console.log('didMount');

        //전에는 응답 완료를 보장받기 위한 수단으로 async, await을 사용했는데,
        //여기서는 fetch와 then을 사용했다.
        fetch(`https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=${params.page}`)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);

                //위에서 useState를 통해 state로써 선언한 친구들을 json으로 변환하여
                //response에 대한 응답값으로 전달할 수 있도록 한다.
                setTotalCount(data.data.movie_count);
                let movies = data.data.movies;
                setIsLocation(false);
                setMovies(movies);
            })
            .catch((e) => console.log(e));
        //console.log(movies);
        //this.setState({movies,isLoading:false});

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
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {
                            movies.map((movie) => {
                                console.log(movie);
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
