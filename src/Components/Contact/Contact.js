import React from 'react'
import './Contact.css'
import Paper from '@mui/material/Paper';
import { Box, Button, FormControl, Input, InputAdornment, InputLabel, TextareaAutosize, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <div id='contact' className='contactFull'>
      <h1 className='mt-2'>Contact Details</h1>
      <br/>
      <Paper elevation={10} className="p-5 m-3">
        <div  className='d-flex justify-content-around align-items-center flex-wrap'>
          
          <div className='compLeft' >
          <h4 className='text-start'>If you want to know more about me or my work, or if you would just like to say hello,
              send me a message, I would love to hear from you</h4>
              <br/> 
            <Paper elevation={16}>
            <h3 className='pt-3 bg-primary'>Form</h3>
            <hr/>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard" className='p-3'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                   <TextField
                   fullWidth
                     label="Name"
                     variant="standard"
                   />
                </Box>
                   <br/>
                   <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                   <TextField
                   fullWidth
                     label="E-mail"
                     variant="standard"
                   />
                </Box>
                <br/>
                <Box  sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <MessageIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <label>Message</label>
                </Box>
                <TextareaAutosize
                  aria-label="minimum height"
                  fullWidth
                  label="sldfj"
                  className='ms-4 mt-2'
                  minRows={3}
                  placeholder="Minimum 3 rows"
                />
                <br/>
                <Button  variant='contained'><SendIcon /> Send</Button>
                </FormControl>
            </Paper>
          </div >
          <div className='compRight' >
            <Paper elevation={16}>
                <img src="https://cdn.dribbble.com/users/3960415/screenshots/8995365/work.gif" alt="" className='w-100' />
                <h3>Find me On</h3>
                <h6 className='m-2'>Please Don't hesitate to Reach out to me and Connect .</h6>
                <hr/>
               <div className='text-start p-3'>
               <div>
                  <PhoneIcon />   +91 9500375810
                </div>
                <div>
                  <EmailIcon />  dk44861@gmail.com
                </div>
                <div>
                  <HomeIcon />  11<sup>th</sup> Cross street, RajendraNagar, Gingee - 604 202
                </div>
                <div>
                  <GitHubIcon />  <a href="https://github.com/deepakkumar2205">https://github.com/deepakkumar2205</a>
                </div>
               </div>
            </Paper>
          </div>
        </div>
      </Paper>
      <div style={{height:"30px"}}>

      </div>
    </div>
  )
}

export default Contact