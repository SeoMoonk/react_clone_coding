import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom'
function Movie({title,year,summary,poster,genres}){
    return (
        <section className="movies">
        <div className="movie data">
            {/* 이미지를 클릭하면, detail 페이지로 이동하는데, state를 전달하면서 이동한다.*/}
            <Link to="/detail-movie" state={{year,title,summary,poster,genres}}>
                <img src={poster} alt={title} title={title}/>
            </Link>
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre,index)=>{
                    return <li key={index} className="movie__genre">{genre}</li>
                })}
            </ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>
        </section>
    );
}

Movie.propTypes = {
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
