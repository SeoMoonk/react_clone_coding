import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {

    //https://yts.mx/api/v2/movie_details.json?movie_id=10
    state = {
        isLoading: true,
        movies: [],
    };

    
    componentDidMount() {

        // //state 컴포넌트가 처음 마운트(생성?) 되었을 때, 처음 상태는 true(로딩중) 일 것이다.
        // //마운트 되고 6초 후에, isLoading의 상태가 false(로딩 완료)로 변경되도록 한다.
        // setTimeout(() => {
        //     this.setState({isLoading:false});
        // },6000);

        this.getMovies();
    }

    getMovies = async () => {

        //async, await을 사용하여 비동기 작업(axios)이 다 마쳐질 때 까지 기다리라는 뜻?
        //요약 : axios는 비동기 작업이고, async와 await을 통해 해당 작업이 끝나면 계속 진행해달라는 뜻.

        //movies.data.data.movies 의 작업을 구조 분해 할당을 사용하여 작업함.
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

        //얻어온 영화 데이터를 state의 movies에 대입
        this.setState({ movies, isLoading: false });
    }


    render() {
        
        const { isLoading, movies } = this.state;

        return (
            <section className="container">
                {/* 마운트 -> 로딩중(True) -> (6초후) -> 로딩 완료(False) */}
                {isLoading? (
                    <div className="loader">
                        <span className="loader__text">Loading ... </span>
                    </div> ) : (
                        <div className ="movies">
                            {movies.map(movie => (
                            <Movie 
                            key={movie.id}      //key 전달
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                            />
                            ))}
                        </div>
                    )}
                    </section>
                    );
                }
            }

export default App;