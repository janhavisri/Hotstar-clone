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
            <span>Connect with Us</span>
   <span><i class="fab fa-facebook-square"></i>
   <i class="fab fa-twitter-square"></i></span>
         </div>
         <div className="second">
                    <span>Disney+ Hotstar App</span>
                   <span><button className=""><i class="fab fa-google-play"></i>GET IT ON<br/> Google Play</button>               
                    <button className=""><i class="fab fa-apple"></i>Download on the<br/> App Store</button></span>        </div>
        </div>
        </div>
    )
}

export default Footer;