import { Button, Chip, Stack, useTheme } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import SimpleImageSlider from "react-simple-image-slider";
// crm application screenshots
import crm1 from '../../assets/projects/crm/1.png';
import crm2 from '../../assets/projects/crm/2.png';
import crm3 from '../../assets/projects/crm/3.png'; 

const Crm = () => {
    const crmBadge=['html5','CSS3','React','Javascript','Nodejs','Mongodb','Mui','O Auth','Express js','CRUD','API','Nested Routes']
    const imageData={
        crm: [{url:  crm1},
              {url:  crm2},
              {url:  crm3}],
      }

      const text = useTheme().palette.text.primary ;

  return (
    <div>
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
                          {crmBadge.map((e,inx)=> <Chip key={`${inx}`} variant="outlined" className='m-1' color="error" size="small" label={e}/>)}
                        </Stack>
                      </p>
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                      <div id="highlight1-simple-slider" className="highlight-slider simple-slider  d-flex justify-content-center"  style={{maxWidth:"580px"}}>
                          <SimpleImageSlider
                            width={window.innerWidth <500 ?400 :500}
                            height={300}
                            images={imageData.crm}
                            showBullets={true}
                            showNavs={false}
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

export default Crm