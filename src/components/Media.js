import React from 'react';
import './Media.css';

function Media() {
    return ( 
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6700/1026700-h-baab56827741" className="" alt="..."/>
      <div class="content-holder"><div class="title ellipsize">Angrezi Medium</div><div class="toptitle"><span class="meta-data">Hindi . </span><span class="meta-data">Drama . </span><span class="meta-data">2020</span></div><div class="description"> Champak, a simple Mithai-seller, will go to any lengths to fulfil daughter Tarika's dream of studying in London, triggering a chain of hilarious misad... </div></div>
    </div>
    <div className="carousel-item">
      <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6535/846535-h" className="" alt="..."/>
      <div class="content-holder"><div class="title ellipsize">Baaghi 3</div><div class="toptitle"><span class="meta-data">Hindi . </span><span class="meta-data">Action . </span><span class="meta-data">2020</span></div><div class="description"> In a twisted turn of events, when a group of deadly terrorists kidnap Ronnie's elder brother in Syria, he sets off on a mission to bring him back. </div></div>
    </div>
    <div className="carousel-item">
      <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h" className="" alt="..."/>
      <div class="content-holder"><div class="title ellipsize">Chhichhore</div><div class="toptitle"><span class="meta-data">Hindi . </span><span class="meta-data">Drama . </span><span class="meta-data">2019</span></div><div class="description"> Divided by time, united by a tragic incident. In a bittersweet reunion, seven middle-aged friends take a walk down the memory lane at the least expect... </div></div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



    )
}
export default Media;