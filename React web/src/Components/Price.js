import React from 'react';
import { Button } from '@material-ui/core';

const Price = (props) => {
    return (
        <>
            <div className="buy-items">
                <h4 className="buyitems-heading">{props.buyitemheading}</h4>
                <ul>{props.feature.map((element) => <li>{element}</li>)}</ul>
                <Button variant="contained" className="btn">{ props.btn}</Button>
            </div>
        </>
    )
}

export default Price
