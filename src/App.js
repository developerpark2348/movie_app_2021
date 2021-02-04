import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

    let [로딩, 로딩변경] = useState(true)
    let [영화, 영화변경] = useState([])

    useEffect(()=>{
        let 타이머 = setTimeout(()=>{
            로딩변경(false)
            return () => { clearTimeout(타이머) }
        }, 6000)
    }, []);
    
    let getMovies = async () => {
        const movies = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json')
        console.log(movies);
    };

    useEffect(()=>{
        getMovies();
    }, []);
    return(
        <div>
            {로딩? "Loading..." : "We are ready" }
        </div>
    );

}

export default App;