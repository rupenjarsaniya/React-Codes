import { Button } from '@material-ui/core';
import React from 'react';
import Cards from './Cards';
import Image from './Image';
import Common from './Common';

const Portfolio = (props) => {
    return (
        <>
            <div id="porfolio-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-image-container">
                                <img src={props.Porfolioimage} alt="Home image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-flex-container">
                                <div className="containerinner">
                                    <Common headline="Portfolio" headpara="Here!"/>
                                    <Button variant="contained" className="btn">See Portfolio</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <div className="container">
                    <h3>our work</h3>
                    <div className="cards">
                        {Image.map((element, index) => {
                            return (
                                <>
                                    <Cards imgsrc={element.imgsrc} title={element.title} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
