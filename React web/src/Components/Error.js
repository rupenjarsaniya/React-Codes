import { Button } from '@material-ui/core';
import React from 'react';

const Error = (props) => {
    return (
        <>
            <div id="error-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="error-page">
                                <div className="error-image">
                                    <img src={props.Errorimage} alt="" />
                                </div>
                                <div className="error-content">
                                    <h2 className="error-heading">sorry not found</h2>
                                    <p className="error-para">this page in not found or you looking for which page is under constructor</p>
                                    <Button variant="contained" className="btn">go to home</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error
