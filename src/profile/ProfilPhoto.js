import React from 'react'
import myphoto from './myphoto.jpg';
const Photo = () => {
    return (
        < img style={{height:"500px",width:"1360px"}} alt="public" src={myphoto} className="my-profile"/>
    );
}


export default Photo;