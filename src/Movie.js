import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
    return (

        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">

                    {/* Movie 컴포넌트를 호출 할 때 Key 값을 받아왔는데,
                    왜 장르를 추가했을 때 또 다른 key 값을 넣어줘야 하는가?*/}
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie__genre">{genre}</li>;
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)} ... </p>
            </div>
        </div>
    );
}

Movie.propTypes = {

    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,        //영화 이미지 URL
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default Movie;