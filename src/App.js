import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Movie from "./Movie";
import "./App.css";

function App() {

    let [로딩, 로딩변경] = useState(true)
    let [영화, 영화변경] = useState([])
    
    let getMovies = async () => {
        const movies = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json')
        영화변경(movies.data.data.movies);
        로딩변경(false);
    };

    useEffect(()=>{
        getMovies();
    }, []);

    return(
        <section className="contatiner">
            {로딩
            ? 
            <div className="loader">
                <span className="loader__text">Loading...</span>
            </div>
            : 
            <div className="movies">
            {영화.map(영화 => {
                return (
                    <Movie
                        key={영화.id}
                        id={영화.id} 
                        year={영화.year} 
                        title={영화.title} 
                        summary={영화.summary} 
                        poster={영화.medium_cover_image}
                        genres={영화.genres}
                    />
                );
            }) }
            </div>
            }
        </section>
    );

}

export default App;