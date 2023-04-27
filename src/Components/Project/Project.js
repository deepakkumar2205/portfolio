import React, { useContext } from 'react';
import './Project.css';

import Bulkemail from './Bulkemail';
import Crm from './Crm';
import Url from './Url';
import Freelance from './Freelance';
import CRUD from './Crud';

const Project = () => {
  
  return (
    <div className='projectFull' id='projects'>
      <h1>Projects</h1>
      <hr />
      <br/>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner" style={window.innerWidth <800?{minHeight:"1000px"}:{minHeight:"0px"}}>
    <div className="carousel-item active" >
      <Bulkemail />
    </div>
    <div className="carousel-item">
      <Crm />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <Url />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <Freelance />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <CRUD />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button"  data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon"  aria-hidden="true"></span>
    <span className="visually-hidden" >Next</span>
  </button>
                          
  
</div>
    </div>
  )
}

export default Project