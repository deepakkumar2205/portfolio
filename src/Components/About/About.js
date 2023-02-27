import React from 'react'
import './about.css'
import AboutCard from './Card'
import AboutCardResume from './CardResume'

const About = () => {
  return (
    <div className='aboutPage' id='about'>
      <h1 className='text-center m-3'>About</h1>
      <div className='d-flex flex-row flex-wrap justify-content-around align-items-center' style={{minHeight:'90vh'}}>
        <AboutCard />
        <AboutCardResume />
      </div>
      <br/>
    </div>
  )
}

export default About