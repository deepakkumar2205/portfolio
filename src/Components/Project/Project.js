import React, { useContext } from 'react';
import './Project.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Box, Button, Chip, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
// crm application screenshots
import crm1 from '../../assets/projects/crm/1.png';
import crm2 from '../../assets/projects/crm/2.png';
import crm3 from '../../assets/projects/crm/3.png';
//Mail application screenshots
import mail1 from '../../assets/projects/mail/1.png';
import mail2 from '../../assets/projects/mail/2.png';
import mail3 from '../../assets/projects/mail/3.png';
import mail4 from '../../assets/projects/mail/4.png';
import mail5 from '../../assets/projects/mail/5.png';
import mail6 from '../../assets/projects/mail/6.png';
import mail7 from '../../assets/projects/mail/7.png';
//Url Shortner Application
import urlShortner1 from '../../assets/projects/urlShortner/1.png';
import urlShortner2 from '../../assets/projects/urlShortner/2.png';
import urlShortner3 from '../../assets/projects/urlShortner/3.png';
import urlShortner4 from '../../assets/projects/urlShortner/4.png';
import Context from '../../Context/Context';
import { useTheme } from '@emotion/react';

const Project = () => {

  const mail=['html5','CSS3','React','Javascript','Nodejs','Mongodb','Mui','O Auth','Express js','CRUD','API']
  const crmBadge=['html5','CSS3','React','Javascript','Nodejs','Mongodb','Mui','O Auth','Express js','CRUD','API','Nested Routes']
  const imageData={
    crm: [{url:  crm1},
          {url:  crm2},
          {url:  crm3}],
    mail:[{url:  mail1},
          {url:  mail2},
          {url:  mail3},
          {url:  mail4},
          {url:  mail5},
          {url:  mail7},
          {url:  mail6}],
    url :[{url:  urlShortner1},
          {url:  urlShortner2},
          {url:  urlShortner3},
          {url:  urlShortner4}]
  }

  const text = useTheme().palette.text.primary ;
  
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
  <div className="carousel-inner" style={window.innerWidth <800?{minHeight:"1000px"}:{minHeight:"0px"}}>
    <div className="carousel-item active" >
      {/* //!sdfsdf */}
      <div className="highlights">
          <div className="container">
              <section className="highlight row">
                  <div className="col-md-6 col-md-offset-2 text-start" style={{color:text}}>
                      <h4 className="highlight-title">Bulk Email Tool</h4>
                      <p className="highlight-description">Bulk Email tool Application is used to send more email at a time and this application have perfect authentication. </p>
                      <p className="highlight-description">If you want to see source of both frontend and backend click the buttons below .</p>
                      <p className="highlight-description">
                      <Stack direction="row" spacing={2}>
                          <Button size="small" variant='outlined' href="https://github.com/deepakkumar2205/Bulk-Email-tool" target="_blank" startIcon={<GitHubIcon />}>Github</Button>
                          <Button size="small"  variant='outlined' href="https://bulk-emailtool.netlify.app" target="_blank" startIcon={<LaunchIcon/>} >Site</Button>
                      </Stack>
                      <br />
                    <h5>Features </h5>
                    <ul>
                      <li>It support Excel file to upload email list.</li>
                      <li>Log book is there to see the history.</li>
                      <li>4 type of Graph is implemented to see <b>Visulally illustrate relationships in the data.</b> </li>
                      <li>Settings page is there to <b>Configure</b> your email with this Bulk Email tool.</li>
                    </ul>
                    <h5>Technology Used </h5>
                      <Stack direction="row" className='d-flex flex-wrap' spacing={1}>
                        {mail.map((e)=> <Chip variant="outlined" className='m-1' color="error" size="small" label={e}/>)}
                      </Stack>
                      </p>
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                  <div id="highlight1-simple-slider" className="highlight-slider simple-slider " style={{maxWidth:"580px"}}>
                          <SimpleImageSlider
                                 width={window.innerWidth <500 ?400 :530}
                            height={300}
                            images={imageData.mail}
                            showBullets={true}
                            showNavs={true}
                          />
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
                  <div className="col-md-6 col-md-offset-2 text-start" style={{color:text}}>
                      <h4 className="highlight-title">CRM Application</h4>
                      <p className="highlight-description">In this CRM Application I mainly implement authentication and authorization based on the role the page will render.</p>
                      <p>I created this application based on single firm</p>
                      <p>If you want to see source of both frontend and backend click the buttons below .</p>
                      <p className="highlight-description">
                      <Stack direction="row" spacing={2}>
                          <Button size="small" variant='outlined' href="https://github.com/deepakkumar2205/CRM-App-Webcode-2" target="_blank" startIcon={<GitHubIcon />}>Github</Button>
                          <Button size="small" variant='outlined' href="https://deepak-crm-app-webcode-2.netlify.app" target="_blank" startIcon={<LaunchIcon/>} >Site</Button>
                      </Stack>
                      <br />
                      <h5>Features </h5>
                    <ul>
                      <li>Perfect Authenticaion part. Pages(Signin, Signup, Forgot password , email Verificaiton, password Change )</li>
                      <li>Admin only can change the role of the employees.</li>
                      <li>Profile Updation is possible for all the persons. </li>
                      <li>Every one can see who are all in the company and role in <b>Employees</b> tab</li>
                      <li>This application have light and dark <b>Theme</b></li>
                      <li>This Application have responsiveness based on the devices.</li>
                    </ul>
                      <h5>Technology Used </h5>
                        <Stack direction="row" className='d-flex flex-wrap' spacing={1}>
                          {crmBadge.map((e)=> <Chip variant="outlined" className='m-1' color="error" size="small" label={e}/>)}
                        </Stack>
                      </p>
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                      <div id="highlight1-simple-slider" className="highlight-slider simple-slider  d-flex justify-content-center"  style={{maxWidth:"580px"}}>
                          <SimpleImageSlider
                            width={window.innerWidth <500 ?400 :530}
                            height={300}
                            images={imageData.crm}
                            showBullets={true}
                            showNavs={true}
                          />
                      </div>
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
                  <div className="col-md-6 col-md-offset-2 text-start" style={{color:text}}>
                      <h4 className="highlight-title">Url Shortner Application</h4>
                      <p className="highlight-description">Using this url Shortner Application we can get the device details of the person who click this links.</p>
                      <p className="highlight-description">
                      <Stack direction="row" spacing={2}>
                          <Button size="small" variant='outlined' href="https://github.com/deepakkumar2205/Day-44-Url_Shortner_App" target="_blank" startIcon={<GitHubIcon />}>Github</Button>
                          <Button size="small"  variant='outlined' href="https://s-u.netlify.app/" startIcon={<LaunchIcon/>} target="_blank">Site</Button>
                      </Stack>
                      <br />
                      <h5>Features </h5>
                    <ul>
                      <li>This Application have <b>/info</b> rought it provides information about the short url and also the person's device ,it's OS version information and also time and date when they clicked the url.</li>
                      <li>we have two ways to create the short url one is our keyword and another one is computer genearted 6 character random string.</li>
                      <li>We can also track how many times the url get clicked. </li>
                      <li>This application have light and dark <b>Theme</b></li>
                      <li>This Application have responsiveness based on the devices.</li>
                    </ul>
                    <h5>Technology Used </h5>
                      <Stack direction="row" className='d-flex flex-wrap' spacing={1}>
                        {crmBadge.map((e)=> <Chip variant="outlined" className='m-1' color="error" size="small" label={e}/>)}
                      </Stack>
                      </p>
                  </div>
                  <div className="col-md-5 col-md-offset-1" >
                    <div id="highlight1-simple-slider" className="highlight-slider simple-slider " style={{maxWidth:"180px"}}>
                            <SimpleImageSlider
                              width={window.innerWidth <500 ?400 :630}
                              height={400}
                              images={imageData.url}
                              showBullets={true}
                              showNavs={true}
                              style={{width:"100px !important",objectFit:"cover !important"}}
                            />
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