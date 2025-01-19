import React from 'react'
import './intro.css'
import goku from '.././assets/goku.svg'
import pf from '../assets/pf.jpg'
import mail from '../assets/Mail.svg'
import github from '../assets/mark-github-24.svg'
import li from '../assets/Social Icons.svg'
import bul from '../assets/bulletin.svg'
import line from '../assets/Line.svg'

function Intro() {
  const sendResume = (e) =>{
    
  }  
  return (
    <>
    <section id='intro'>
        <section className="main">
            <div className='content'>
                <h3>Aspiring Front-End Developer</h3>
                <h2>MANOJ B</h2>
                <p className='abt'>
                    I'm a Student, Front end developer<br></br> and Passionate gamer.
                    I'm currently working <br></br>on honing skills in Back end.
                </p>
                <button className='btn'>DOWNLOAD RESUME</button>
            </div>
            <img src={goku}/>
        </section>
        <section className='profile'>
            <div className="left">
                <div className='pp'>
                    <div className='photo'>
                        <img src={pf}/>
                    </div>
                </div>
                <div className='social'>
                    <img src={mail} id='mail'/>
                    <img src={github} id='git'/>
                    <img src={li} id='li'/>
                </div>
            </div>
            <div className="con">
                <img src={line}></img>
                <div className='right'>
                    <div className='top'>
                        <img src={bul}/>
                        <h2>About</h2>
                    </div>
                    <p>I'm a student and front end web developer from Bangalore, Karnataka<br></br> and currently pursuing BCA(Hon's) in RV University.<br></br>
                        I enjoy building everything from small business to rich interactive web apps.
                    </p>
                </div>
            </div>
        </section>
    </section>
    </>
  )
}

export default Intro