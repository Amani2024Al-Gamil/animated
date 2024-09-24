
import React, { useEffect } from 'react';
import './AOSCOM.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyImage from './iii.jpg'
const AOSComponent = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <div data-aos="fade-up" className='d-flex container row mx-auto mt-5 row bg-secondary pt-5 p-5'>
        <div className=' col-lg-6 col-12 p-5'  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
<img src={MyImage} className={'www px-5 w-100 rounded'}  />
        </div>
        <div className='col-lg-6 col-12 p-5 bg-dark rounded shadow shadow-dark' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        >
            <h3 className='text-warning pt-3'>About Me</h3>
            <p className='text-light pt-5'>I am a Fullstack web developer,
                I have an Experience in web designs and programming
            </p>
            <p className='text-light'>I can use Html css Html5 css3 bootstrap javacsript react</p>
            <p className='text-light'>I do Alot of Projects</p>
            <button className='btn btn-outline-warning px-2  mx-4 mt-5  fw-bolder'>Download CV in Arabic</button>
            <button className='btn btn-warning px-2  mx-4 mt-5  fw-bolder'> Download CV in English</button>
        </div>
    </div>
  )
}

export default AOSComponent