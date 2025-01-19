import React from 'react'
import bull from '../assets/bulletin.svg'
import '../components/page2.css'
import card from "../assets2/flip-card.png"

const Page2 = () => {
  return (
    <>
    <section className="page2">
    <div className="Laboratory">
          <img src={bull}></img>
          <p>Laboratory</p>
        </div>
        <section className='projects'>
            <div className="container">
                <div className="container1">
                    <img src={card}/><hr></hr>
                    <a href='https://manoj6153.github.io/memory-flip/'><h3>Play Now →</h3></a>
                </div>
            </div>
            <div className="container">
                <div className="container1">
                    <img src={card}/><hr></hr>
                    <a href='https://manoj6153.github.io/memory-flip/'><h3>Play Now →</h3></a>
                </div>
            </div>
            <div className="container">
                <div className="container1">
                    <img src={card}/><hr></hr>
                    <a href='https://manoj6153.github.io/memory-flip/'><h3>Play Now →</h3></a>
                </div>
            </div>
        </section>
    </section>
    </>
  )
}

export default Page2