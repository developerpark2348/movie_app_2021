import React from 'react';
import { Link } from 'react-router-dom'
import './Movie.css';

function Movie(props){
    return(
    <Link 
        to={{
            pathname: `/movie/${props.id}`,
            state: {
                year:props.year,
                title:props.title,
                summary:props.summary,
                poster:props.poster,
                genres:props.genres,
                id:props.id
            },
        }}
    >
        <div className="movie">
            <img src={props.poster} alt={props.title} title={props.title} />
            <div className="movie__data">
                <h3 className="movie__title">{props.title}</h3>
                <h5 className="movie__year">{props.year}</h5>
                <ul className="movie__genres">
                    {props.genres.map((genre, index) => {
                        return(
                        <li key={index} className="genres__genre">{genre}</li>
                        )
                })}
                </ul>
                <p className="movie__summary">{props.summary.slice(0,180)}...</p>
            </div>
        </div>
    </Link>
    )
}

export default Movie;