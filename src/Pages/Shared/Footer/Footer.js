import React from "react";
import './Footer.css'

const Footer = () => {
    return (

        <div className='foot' style={{ backgroundColor: "#0063B2FF", color: "white" }}>
            <div className='footer'>
                <div>
                    <h4>Our Branches</h4>
                    <p>Dhaka</p>
                    <p>Chattagram</p>
                    <p>Sylhet</p>
                    <p>Rajshahi</p>
                </div>
                <div>
                    <h4>Important Links</h4>
                    <p>Contact US</p>
                    <p>Newsletter</p>
                </div>
                <div>
                    <h4>Subscribe</h4>
                    <br />
                    <h6>Email</h6>
                    <div className="search-service">
                        <input className="p-2" type="text" />{" "}
                        <button className="btn p-2 btn-dark">Search</button>
                    </div>
                </div>
            </div>
            <hr />
            <div> <h5 className="text-center pb-5">Copyright © 2021  All rights reserved</h5>
            </div>


        </div>
    );
};

export default Footer;