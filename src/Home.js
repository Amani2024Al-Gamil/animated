import React from 'react'
import MyImage from './iii.jpg'
import './Home.css'
function Home() {
  return (
    <div className='pt-5 ' >
        <img src={MyImage} className={' ww rounded-circle d-block mx-auto animate__animated animate__backInRight'}/>
        <h3 className='text-light text-center pt-5 animate__animated animate__backInLeft ' >Hello i am</h3>
        <h4 className='text-light fs-1 text-center pt-5 animate__animated animate__backInRight '>Amany Al_Gamil Al_Temamy</h4>
        <p className=' text-light text-center pt-5 fs-3  animate__animated animate__backInLeft   'data-aos="zoom-out-left" >Fullstack Web developer
        </p>
        <button className='btn btn-outline-warning rounded-circle fw-bolder d-block mx-auto mt-5 animate__animated animate__backInRight  '>Download CV</button>
    </div>
  )
}

export default Home