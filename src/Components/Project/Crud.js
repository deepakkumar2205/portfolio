import { Button, Chip, Stack, useTheme } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import SimpleImageSlider from "react-simple-image-slider";
// crm application screenshots
import f1 from '../../assets/projects/crud/1.png';
import f2 from '../../assets/projects/crud/2.png';
import f3 from '../../assets/projects/crud/3.png'; 

const CRUD = () => {
    const crmBadge=['html5','CSS3','React','Javascript','Mui','CRUD','API']
    const imageData={
        crm: [f1,f2,f3],
      }

      const text = useTheme().palette.text.primary ;

  return (
    <div>
        <div className="highlights">
          <div className="container">
              <section className="highlight row">
                  <div className="col-md-6 col-md-offset-2 text-start" style={{color:text}}>
                      <h4 className="highlight-title">CRUD</h4>
                      <p className="highlight-description">CRUD stands for <b>Create Read Update Delete</b>.</p>
                      <p>In this applicaiton I have mainly focused on frontend.</p>
                      <p>If you want to see source of both frontend and backend click the buttons below .</p>
                      <p className="highlight-description">
                      <Stack direction="row-reverse" spacing={2}>
                          <Button size="small" variant='outlined' href="https://github.com/deepakkumar2205/Day-31-React-with-axios" target="_blank" startIcon={<GitHubIcon />}>Github</Button>
                          <Button size="small" variant='outlined' href="https://deepak-axios-crud.netlify.app" target="_blank" startIcon={<LaunchIcon/>} >Site</Button>
                      </Stack>
                      <br />
                      <h5>Features </h5>
                    <ul>
                      <li>We can create the teacher/students. </li>
                      <li>This application have search bar to search the person.</li>
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

export default CRUD