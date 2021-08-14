import './Header.css';
import React, {useState} from "react";
import { Input } from "@material-ui/core";

function Head() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

      return(
        <div className="header">
        <div className="header-left">
  <ul className='nav-links'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
      <span><i class="fas fa-align-justify"></i>
            <ul className="drop-menu">
              <li><a href="#">Channels</a></li>
              <li><a href="#">Languages</a></li>
              <li><a href="#">Genres</a></li>
            </ul>
            </span>
         <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt=""
          />
          
    
          <li>
            <a href="#" className="desktop-item">TV</a>

          <ul class="drop-menu">          
                      <li><a href="#">Hotstar Specials</a></li>
                      <li><a href="#">Quix</a></li>
                      <li><a href="#">Star Jalsha</a></li>
                      <li><a href="#">Star Plus</a></li>
                      <li><a href="#">Star Vijay</a></li>
                      <li><a href="#">Star Bharat</a></li>
                      <li><a href="#">Asianet</a></li>
                      <li><a href="#">Star Maa</a></li>
                      <li><a href="#">more...</a></li>
                  </ul>
                  </li>
                  <li>
                  <a href="#" className="desktop-item">Movies</a>
          
              <ul class="drop-menu">                   
                      <li><a href="#">Hindi</a></li>
                      <li><a href="#">Bengali</a></li>
                      <li><a href="#">Telugu</a></li>
                      <li><a href="#">Malayalam</a></li>
                      <li><a href="#">Tamil</a></li>
                      <li><a href="#">Marathi</a></li>
                      <li><a href="#">English</a></li>
                      <li><a href="#">Kannada</a></li>
                  </ul>
              </li>
          <li  > 
          <a href="#" className="desktop-item">Sports</a>
      
       
          <ul class="drop-menu">
                   <li><a href="#">Cricket</a></li>
                   <li><a href="#">Football</a></li>
                   <li><a href="#">Formula 1</a></li>
                   <li><a href="#">eSports</a></li>
                   <li><a href="#">Tennis</a></li>
                   <li><a href="#">Formula E</a></li>
                   <li><a href="#">Martial Arts</a></li>
                   <li><a href="#">Basketball</a></li>
                   <li><a href="#">Badminton</a></li>
                   <li><a href="#">Hockey</a></li>
                   <li><a href="#">Athletics</a></li>
                   <li><a href="#">Golf</a></li>
                   <li><a href="#">Wrestling</a></li>
                   <li><a href="#">Kabaddi</a></li>
                   <li><a href="#">Table Tennis</a></li>
              </ul>
          </li>
          <li><a href="#">Premium</a></li>
          <li><a href="#">Disney+</a></li>
         <li><a href="#"><img
            src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
            alt=""
            className="kids" id="kids"
          /></a></li>
        </ul>
       < div className="header-right">
          <Input style={{color:'rgb(123 127 135)' ,width:"250px"}} placeholder="Search" className="search" />
          <i class="fas fa-search"></i>
          <button className="btn">SUBSCRIBE</button>
          <span className="log" >LOGIN</span>
                  </div>
        </div>
        </div>
      
    )
}
export default Head;