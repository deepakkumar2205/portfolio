import { Button, Chip, Stack, useTheme } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import SimpleImageSlider from "react-simple-image-slider";
//Mail application screenshots
import mail1 from '../../assets/projects/mail/1.png';
import mail2 from '../../assets/projects/mail/2.png';
import mail3 from '../../assets/projects/mail/3.png';
import mail4 from '../../assets/projects/mail/4.png';
import mail5 from '../../assets/projects/mail/5.png';
import mail6 from '../../assets/projects/mail/6.png';
import mail7 from '../../assets/projects/mail/7.png';


const Bulkemail = () => {
    const text = useTheme().palette.text.primary ;
    const mail=['html5','CSS3','React','Javascript','Nodejs','Mongodb','Mui','O Auth','Express js','CRUD','API']
    const imageData={
        mail:[{url:  mail1},
              {url:  mail2},
              {url:  mail3},
              {url:  mail4},
              {url:  mail5},
              {url:  mail7},
              {url:  mail6}],
      }

  return (
    <div>
        <div className="highlights">
          <div className="container">
              <section className="highlight row">
                  <div className="col-md-6 col-md-offset-2 text-start" style={{color:text}}>
                      <h4 className="highlight-title">Bulk Email Tool</h4>
                      <p className="highlight-description">Bulk Email tool Application is used to send more email at a time and this application have perfect authentication. </p>
                      <p className="highlight-description">If you want to see source of both frontend and backend click the buttons below .</p>
                      <p className="highlight-description">
                      <Stack direction="row-reverse" spacing={2}>
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
                        {mail.map((e,inx)=> <Chip key={`${inx}`} variant="outlined" className='m-1' color="error" size="small" label={e}/>)}
                      </Stack>
                      </p>
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                  <div id="highlight1-simple-slider" className="highlight-slider simple-slider " style={{maxWidth:"580px"}}>
                          <SimpleImageSlider
                            width={window.innerWidth <500 ?400 :500}
                            height={300}
                            images={imageData.mail}
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

export default Bulkemail