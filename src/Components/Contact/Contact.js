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
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

  const handleSubmit =(e)=>{
    e.preventDefault()
    const data = {
      from_name : e.target.name.value ,
      email_id: e.target.email.value ,
      message: e.target.message.value
    }
    
    emailjs.send("service_ysvf7ud", 'template_icfrxfq', data, '8JMAfkH-ZWOSjIXpp')
      .then((result) => {
          if(result.text === 'OK'){
            toast.success('👍 Your Msg Sent Successfully to Deepakkumar ', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          }
      }, (error) => {
        toast.error('😖 Some Error Occured', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };
  

  return (
    <div id='contact' className='contactFull'>
      <h1 className='mt-2'>Contact Details</h1>
      <br/>
      <Paper elevation={10} className="p-4 m-3">
        <div  className='d-flex justify-content-around align-items-center flex-wrap'>
          
          <div className='compLeft' >
          <h4 className='text-start'>👋 If you want to know more about me or my work, or if you would just like to say hello,
              send me a message, I would love to hear from you</h4>
              <br/> 
            <Paper elevation={16}>
            <h3 className='p-2 bg-primary headForm'>Form</h3>
            {/* //! start form */}
            <form className=" needs-validation" novalidate onSubmit={handleSubmit}>
            <div className='p-3 text-start '>
            <div className="mb-3  ">
               <label htmlFor="nameid" className="form-label " >Name</label>
               <input type="text" className="form-control" id="nameid" name='name' placeholder="Enter Your Name" aria-describedby="inputGroupPrepend" required/>
             </div>
              <div className="mb-3  ">
               <label htmlFor="emailid" className="form-label ">Email address</label>
               <input type="email" className="form-control" name='emailid' id="email" placeholder="name@example.com" required/>
             </div>
             <div className="mb-3">
               <label htmlFor="messageid" className="form-label">Message</label>
               <textarea className="form-control" name='message' id="messageid" rows="3" required></textarea>
             </div>
             <Button variant="contained" type='submit' fullWidth endIcon={<SendIcon />}> Send</Button>
             </div> 
             </form>
            {/* //! end form */}
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