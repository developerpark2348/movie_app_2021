import React, { useEffect } from 'react';
import './Detail.css';

function Detail(props) {

    useEffect(()=>{
        const Info = props.location.state
        console.log(Info);
        if(Info === undefined){
            props.history.push("/");
        }
    }, [] )
    // Detail 페이지에서 새로고침시 클릭하지 않았기에 props가 전송되지않는 버그를, Info가 undefined로 전송시 history.push를 사용하여 "/"링크로 보내버림.

    if(props.location.state){
        return(
            <span className="Title">{props.location.state.title}</span>
        )} else{
            return null;
        }
}

export default Detail;