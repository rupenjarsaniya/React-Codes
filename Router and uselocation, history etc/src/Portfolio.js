import { Button } from '@material-ui/core';
import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom';

const Portfolio = () => {
    const { gallery, all } = useParams();
    const location = useLocation();
    const his = useHistory();
    console.log(location);
    return( <>
        <h1>Portfolio of {gallery} {all}</h1>
        <p>{location.pathname}</p>
        {/* {location.pathname === "/portfolio/html/ok" ? <Button variant="contained" onClick={ ()=>his.push("/")}>vip</Button> : ""} */}
        {location.pathname === "/portfolio/html/ok" ? <Button variant="contained" onClick={ ()=>his.goForward()}>vip</Button> : ""}
    </>)
}

export default Portfolio
