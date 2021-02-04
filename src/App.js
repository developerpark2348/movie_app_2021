import React, {useEffect, useState} from 'react';

function App() {

    let [로딩, 로딩변경] = useState(true)
    let [영화, 영화변경] = useState([])

    useEffect(()=>{
        let 로딩타이머 = setTimeout(()=>{
            로딩변경(false)
        }, 6000)
    }, []);

    return(
        <div>
            {로딩? "Loading..." : "We are ready" }
        </div>
    );

}

export default App;