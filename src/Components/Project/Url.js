import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Box, Button, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
//Url Shortner Application
import urlShortner1 from '../../assets/projects/urlShortner/1.png';
import urlShortner2 from '../../assets/projects/urlShortner/2.png';
import urlShortner3 from '../../assets/projects/urlShortner/3.png';
import urlShortner4 from '../../assets/projects/urlShortner/4.png';
import Context from '../../Context/Context';
import { useTheme } from '@emotion/react';

const Url = () => {
    const crmBadge=['html5','CSS3','React','Javascript','Nodejs','Mongodb','Mui','O Auth','Express js','CRUD','API','Nested Routes']
    const imageData={
      url :[{url:  urlShortner1},
            {url:  urlShortner2},
            {url:  urlShortner3},
            {url:  urlShortner4}]
    }
  
    const text = useTheme().palette.text.primary ;

  return (
    <div>
         <div className="highlights">
          <div className="container">
              <section className="highlight row">
                  <div className="col-md-6 col-md-offset-2 text-start" style={{color:text}}>
                      <h4 className="highlight-title">Device Info Thefter</h4>
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
                        {crmBadge.map((e,inx)=> <Chip key={inx} variant="outlined" className='m-1' color="error" size="small" label={e}/>)}
                      </Stack>
                      </p>
                  </div>
                  <div className="col-md-5 col-md-offset-1" >
                    <div id="highlight1-simple-slider" className="highlight-slider simple-slider d-flex justify-content-center" style={{maxWidth:"580px"}}>
                            <SimpleImageSlider
                              width={window.innerWidth <500 ?400 :500}
                              height={300}
                              images={imageData.url}
                              showBullets={true}
                              showNavs={false}
                              // style={{width:"100px !important",objectFit:"cover !important"}}
                            />
                    </div>
                  </div>
                </section>
                <br />
                <br />
          </div>
       </div>
    </div>
  )
}

export default Url