import React from 'react'
import '../components/page.css'
import bull from '../assets/bulletin.svg'
import react from '../assets2/react.svg'
import js from '../assets2/js.svg'
import python from '../assets2/python.svg'
import c from '../assets2/c++.svg'
import bar from '../assets2/bar.svg'

const Page = () => {
  return (
    <>
    <section className="page">
      <div className="skill">
        <img src={bull}></img>
        <p>Skills</p>
      </div>
      <section className='skills'>
        <div className='react'>
          <img src={react} className='rea'/>
          <img src={bar} className='bar'/>
        </div>
        <div className='js'>
          <img src={js} className='jav'/>
          <img src={bar} className='bar'/>
        </div>
        <div className='python'>
          <img src={python} className='py'/>
          <img src={bar} className='bar'/>
        </div>
        <div className='c'>
          <img src={c} className='cpp'/>
          <img src={bar} className='bar'/>
        </div>
      </section>
    </section>
    </>
  )
}

export default Page