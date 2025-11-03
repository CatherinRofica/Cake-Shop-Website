import React from 'react';

export function Footer(){
    return(
        <>
        <div className="footer container-fluid d-flex ">
            <div className="foot1 mt-5">
                <h6 className="foot-head">Shop</h6>
                <h6 className="foot-head">About</h6>
                <h6 className="foot-head">Journal</h6>
                <h6 className="foot-head">Corporate Orders</h6>
                <h6 className="foot-head">Support</h6>
                <h6 className="foot-head">Order Status</h6>
            </div>
            <div className="foot2 ms-4 mt-5">
            <p2 className="connect-p2 mt-5">Sign up for our newsletter to get 10 off your next order. Stay<br></br> posted on the latest product releases, events and special offers<br></br> happening at Grovemade.</p2><br></br>
            <input type="email" placeholder="Enter your email" className="connect-form mt-5 "></input>
            <button className="connect-btn bg-light" type="submit">SUBMIT</button>
            </div>
        </div>
        <div className="botlast d-flex container-fluid gap-5">
            <p className="botlast-text ms-1">©2024 Grovemade</p>
            <p className="botlast-text ms-2">Cookies Preferences</p>
            <p className="botlast-text ms-3">Termas & Conditions</p>
            <p className="botlast-text ms-2">Accessibility Statement</p>
            <p className="botlast-text ms-2">Privacy Policy</p>
            <p className="botlast-text ms-2">Site by Department</p>
        </div>
        </>
    );
}