import React from 'react';

const Image = props => {
    if(props.src)
        return <img style={{width: '100%'}} src={process.env.REACT_APP_BACK_URL + props.src} alt={props.alt}/>;
    else return "Loading...";
}

export default Image;