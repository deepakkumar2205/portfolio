import React, { useContext } from 'react'
import Context from '../../Context/Context'
import lightPic from './hero-light.jpg'
import darkPic from './hero-dark.jpg'
import './home.css'
import Wave from 'react-wavify'
import deepak from './deepak.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IconButton, Paper, Stack } from '@mui/material'

const Home = () => {
  const contextData = useContext(Context);
  return (
    <div className='entire' id='home' style={{height:"100vh",backgroundImage :`url(${contextData.theme ==='light' ? lightPic : darkPic})`}}>
      <div className='centerCont'>
        <div height='100vh'>
        <h1 className="mb-3 display-3 title primary"><b>Hi, I am Deepakkumar</b></h1><hr/>
        <h4>Full Stack Web Developer</h4>
        <div className='d-flex flex-row justify-content-center'>
        <Stack direction='row' spacing={3}>
          <IconButton color="primary"  component="label" >
            <a href='https://github.com/deepakkumar2205' target="_blan">
            <GitHubIcon />
            </a>
          </IconButton>
          <IconButton color="primary"  component="label" >
          <a href='https://www.linkedin.com/in/deepakkumar-n' target="_blank">
            <LinkedInIcon />
            </a>
          </IconButton>
          <IconButton color="primary"  component="label" >
          <a href='mailto: dk44861@gmail.com' target="_blan">
            <MailOutlineIcon />
            </a>
          </IconButton>
        </Stack>
        </div>
        </div>
        <Paper className='d-flex flex-column justify-content-end m-4' elevation={16} style={{borderRadius:"65px" , border:"3px solid black",backgroundColor:"transparent"}}>
          <img src={deepak}  className="image"/>
        </Paper>

      </div>
        
        <div  className="d-flex flex-column justify-content-end " style={{height:"16vh"}}>
          <Wave fill='black'
            paused={false}
            options={{
            height: 90,
            amplitude: 30,
            speed: 0.30,
            points: 4
          }}
        />

      </div>
     
    </div>

  ) 
}

export default Home