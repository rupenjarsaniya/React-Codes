import React from 'react';
import Common from './Common';
import Price from './Price';

const list = ['Full Speed', 'Bootstrap Grid', 'Material UI', 'HTML5', 'CSS3', 'ReactJS', 'JavaScript', 'Only $7'];

const Buy = (props) => {
    return (
        <>
            <div id="buy-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-flex-container">
                                <div className="containerinner">
                                    <Common headline="Buy Templete" headpara="and" gold="grow your business"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-image-container">
                                <img src={props.Buyimage} alt="Home image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="buycards">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="buy-heading">See Price</h2>
                            <div className="buy-box">
                                <Price buyitemheading="speacial price" feature={list} btn="Buy Now"/>
                                <Price buyitemheading="speacial price" feature={list} btn="Buy Now"/>
                                <Price buyitemheading="speacial price" feature={list} btn="Buy Now"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy
