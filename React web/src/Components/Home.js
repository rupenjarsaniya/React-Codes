import { Button } from '@material-ui/core';
import React from 'react';
import Common from './Common';

const Home = (props) => {
    return (
        <>
            <div id="home-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-flex-container">
                                <div className="containerinner">
                                    <Common headline="start up" headpara="your business with" gold="our templete"/>
                                    <Button variant="contained" className="btn">Buy Now</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-image-container">
                                <img src={props.Homeimage} alt="Home image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="info-box">
                                <h3>Company Eye</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae unde consectetur magnam fuga natus, tempore tempora? Mollitia delectus consectetur tempore obcaecati odio quis beatae perferendis est? Nesciunt, dolorum aspernatur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nemo consequuntur dolore exercitationem neque, porro doloremque deleniti molestias alias voluptates excepturi recusandae in repellendus esse pariatur sunt. Animi, repellendus magnam.  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home-secondry-container">
                <div className="container">
                    <div className="info-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="home-image-container">
                                    <img src={props.Homeimagefirst} alt="Home image" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="home-flex-container">
                                    <div className="containerinner">
                                        <h2 className="info-heading">Meet Our Best Templete</h2>
                                        <p className="info-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi suscipit eum voluptatem ratione quos pariatur rerum! Modi, distinctio! Ab illum ex quos reiciendis tempora similique quaerat porro consequuntur ratione?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="home-flex-container">
                                    <div className="containerinner">
                                        <h2 className="info-heading">Meet Our Best Templete</h2>
                                        <p className="info-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi suscipit eum voluptatem ratione quos pariatur rerum! Modi, distinctio! Ab illum ex quos reiciendis tempora similique quaerat porro consequuntur ratione?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="home-image-container">
                                    <img src={props.Homeimagesecond} alt="Home image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
