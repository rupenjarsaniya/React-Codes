import { Button } from '@material-ui/core';
import React from 'react'

const Contact = (props) => {
    return (
        <>
            <div id="contact-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-flex-container">
                                <div className="containerinner">
                                    <form method="post" className="myform">
                                    <h3 class="contact-heading">Contact Us</h3>
                                        <input type="text" name="name" placeholder="fullname" className="myinput" autoComplete="off"/>
                                        <input type="email" name="email" placeholder="email id" className="myinput" autoComplete="off"/>
                                        <input type="text" name="name" placeholder="phone" maxLength="12" className="myinput" autoComplete="off"/>
                                        <input type="text" name="name" placeholder="city" className="myinput" autoComplete="off"/>
                                        <textarea name="msg" placeholder="Message" className="mytextarea" autoComplete="off"></textarea>
                                    <Button type="submit" variant="contained" className="btn">Send</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-image-container">
                                <img src={props.Contactimage} alt="Home image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
