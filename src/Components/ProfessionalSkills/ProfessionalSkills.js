import React from 'react'
import './ProfessionalSkills.css'
import Paper from '@mui/material/Paper';
import CardComp from './Card';
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css3.png'
import js from '../../assets/skills/js.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import react from '../../assets/skills/react1.png'
import nodejs from '../../assets/skills/nodejs1.png'
import mongodb from '../../assets/skills/mongodb.png'
import sql from '../../assets/skills/mysql.png'
import git from '../../assets/skills/git.png'
import github from '../../assets/skills/github.png'
import redux from '../../assets/skills/redux.png'
import mui from '../../assets/skills/mui.png'

import vscode from '../../assets/tools/vs.png'
import postman from '../../assets/tools/postman.png'
import netlify from '../../assets/tools/netlify.png'
import vercel from '../../assets/tools/triangle1.png'


const ProfessionalSkills = () => {
  const skills =[
    {
      image: html,
      name:"HTML5",
      descript:'Markup language for web',
      percent:75
    },
    {
      image: css,
      name:"CSS3",
      descript:'Style sheet language',
      percent:65
    },
    {
      image: js,
      name:"Javascript",
      descript:'Programming lang of web',
      percent:80
    },
    {
      image: bootstrap,
      name:"Bootstrap",
      descript:'CSS Framework',
      percent:65
    },
    {
      image: react,
      name:"React",
      descript:'UI library',
      percent:80
    },
    {
      image: nodejs,
      name:"Nodejs",
      descript:'CSS Framework',
      percent:75
    },
    {
      image: mongodb,
      name:"MongoDB",
      descript:'NoSQL database',
      percent:70
    },
    {
      image: sql,
      name:"Mysql",
      descript:'SQL database',
      percent:70
    },
    {
      image: git,
      name:"Git",
      descript:'version control system',
      percent:70
    },
    {
      image: github,
      name:"Git Hub",
      descript:'Code hosting platform',
      percent:70
    },
    {
      image: redux,
      name:"Redux",
      descript:'Data management library',
      percent:70
    },
    {
      image: mui,
      name:"MUI",
      descript:'Lib for react components',
      percent:70
    },
  ]
  const tools = [
    {
      image: vscode,
      name:"VS Code",
      descript:'Code Editor',
      percent:90
    },
    {
      image: postman,
      name:"Postman",
      descript:'Developer API platform',
      percent:90
    },
    {
      image: netlify,
      name:"Netlify",
      descript:'Deployment platform',
      percent:90
    },
    {
      image: vercel,
      name:"Vercel",
      descript:'web hoisting service',
      percent:90
    },
  ]

  return (
    <div className='Profentire ' id='skills'>
      <h1>Skills & Tools</h1>
      <div style={{width:"100vw",justifyContent:"center",alignItems:'center', display:"flex"}}>
        <div style={{width:"90%"}}>
        <Paper elevation={3} >
           <h4 className='text-align-left d-flex p-3'>Professional Skillset :</h4>
           <div className='d-flex flex-wrap justify-content-between px-5 '>
            {skills.map((e=>{
              console.log(e);
             return <CardComp details={e} key={e.name}/>
            }))}
           </div>
        </Paper>
        <br/ >
        <Paper elevation={3} >
           <h4 className='text-align-left d-flex p-3'>Tools I used :</h4>
           <div className='d-flex flex-wrap justify-content-between px-5 '>
            {tools.map((e=>{
              console.log(e);
             return <CardComp details={e} key={e.name}/>
            }))}
           </div>
        </Paper>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default ProfessionalSkills