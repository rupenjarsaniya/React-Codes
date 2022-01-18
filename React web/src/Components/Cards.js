import React from 'react';

const Cards = (props) => {
    return (
        <>
            <div className="box">
                <div className="image">
                    <img src={props.imgsrc} alt="image" />
                    <div className="over">
                        <p className="over-para">{props.title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
