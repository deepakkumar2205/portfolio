import React from 'react';
import './Project.css';

import crm1 from '../../assets/projects/crm/1.png';
import crm2 from '../../assets/projects/crm/2.png';
import crm3 from '../../assets/projects/crm/3.png';

const Project = () => {
  const imageData=[
    {
      original:  crm1
    },
    {
      original:  crm2
    },
    {
      original:  crm3
    }
  ]

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
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      {/* //!sdfsdf */}
      <div className="highlights">
          <div className="container">
              <section className="highlight row">
                  <div className="col-md-6 col-md-offset-2">
                      <h4 className="highlight-title">CRM -Application</h4>
                      <p className="highlight-description">Extensive documentation on how to customize your slider and control it using an intuitive API.</p>
                      <p className="highlight-description">Tons of ready-to-use examples are also available.</p>
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                          <img src={crm1} className="imgstyle" alt="" />
                  </div>
                </section>
          </div>
       </div>
      {/* //!sdfsdff */}
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      {/* //!sdfsdf */}
      <div className="highlights">
          <div className="container">
              <section className="highlight row">
                  <div className="col-md-6 col-md-offset-2">
                      <h4 className="highlight-title">Well documented</h4>
                      <p className="highlight-description">Extensive documentation on how to customize your slider and control it using an intuitive API.</p>
                      <p className="highlight-description">Tons of ready-to-use examples are also available.</p>
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                      <div id="highlight1-simple-slider" className="highlight-slider simple-slider">
                          {/* <div style={{backgroundImage:"url(https://unsplash.it/500/400?random=1)"}}></div> */}
                          <img src="https://unsplash.it/500/400?random=1" alt="" />
                        
                      </div>
                  </div>
                </section>
          </div>
       </div>
      {/* //!sdfsdff */}
    </div>
    <div className="carousel-item">
      {/* //!sdfsdf */}
      <div className="highlights">
          <div className="container">
              <section className="highlight row">
                  <div className="col-md-6 col-md-offset-2">
                      <h4 className="highlight-title">Well documented</h4>
                      <p className="highlight-description">Extensive documentation on how to customize your slider and control it using an intuitive API.</p>
                      <p className="highlight-description">Tons of ready-to-use examples are also available.</p>
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                      <div id="highlight1-simple-slider" className="highlight-slider simple-slider">
                          {/* <div style={{backgroundImage:"url(https://unsplash.it/500/400?random=1)"}}></div> */}
                          <img src="https://unsplash.it/500/400?random=1" alt="" />
                        
                      </div>
                  </div>
                </section>
          </div>
       </div>
      {/* //!sdfsdff */}
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