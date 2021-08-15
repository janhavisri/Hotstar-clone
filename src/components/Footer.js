

import React from 'react'
import'./Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="left">
                
                <span>About Disney+ Hotstar</span>
                <span>Terms of Use</span>
                <span>Privacy Policy</span>
                <span>FAQ</span>
                <span>Feedback</span>
                <span>Careers</span>
                
                <p>© 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service<br/> marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights<br/> reserved.</p>
    
            </div>
               <div className="right">
              <div className="first"> 
              <div className="x">
               <span>Connect with Us</span>
               </div>
               <div className="y">
            <span>Disney+ Hotstar App</span>
            </div>
            </div>
            <div className="second">
                <div className="one">
                    <div className="a"style={{paddingRight:'20px'}}>
         <button className="btn-a" ><i className="icon"><img style={{height:"25px"}} src="fb.png"/></i></button>
          </div>
          <div className="b">
          <button className="btn-b"><i className="icon"><img style={{height:"30px"}} src="tt.png"/></i></button>
          </div>
          </div>
          <div className="two">
          <div className="c"style={{paddingRight:'20px'}}>
          <button className="btn-c"><span><i className="icon"><img style={{height:"35px"}}src="gp.png"/></i></span><span style={{color:" rgba(255, 255, 255, 0.8)"}}><h6>GET IT ON</h6><h4>Google Play</h4></span></button>               
         </div>
          <div className="d">
          <button className="btn-d"><span><i className="icon"><img style={{height:"35px"}}src="apple.png"/></i></span><span  style={{color:" rgba(255, 255, 255, 0.8)"}}><h6>Download on the</h6><h4>App Store</h4></span></button>
        </div>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Footer;