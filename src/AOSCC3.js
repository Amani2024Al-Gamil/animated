import React, { useEffect } from 'react';
import './AOSCC3.css'
import AOS from 'aos';
import { IoSettingsSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { SiMaterialdesign } from "react-icons/si";
import { IoIosCode } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import 'aos/dist/aos.css';
const AOSCC3 = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    return (
        <div >
            <h3 className='fs-1 fw-bolder text-warning text-center mt-5 pt-5' data-aos="zoom-in-down" >Services <p className={'ll rounded-circle '}></p></h3>
            <div className='container mx-auto row bg-dark rounded mt-5'>
                <div  className='col-lg-4 col-12 p-5  shadow shadow-dark  text-light'  data-aos="fade-up-right" bg-secondary rounded >
                <IoSettingsSharp className='text-warning fs-1 d-block mx-auto'/>
                    <h2 className='mt-3 text-center'>Creative Design</h2>
                </div>
                <div  className='col-lg-4 col-12 p-5  shadow shadow-dark  text-light'  data-aos="fade-up-right" bg-secondary rounded >
                <FaCode className='text-warning fs-1  d-block mx-auto'/>
                    <h2 className='mt-3 text-center'>Clean Code</h2>
                </div>
                <div  className='col-lg-4 col-12 p-5  shadow shadow-dark text-light'  data-aos="fade-up-right" bg-secondary rounded >
                <DiResponsive className='text-warning fs-1  d-block mx-auto '/>
                    <h2 className='mt-3 text-center'>Responsive Design</h2>
                </div>
                <div  className='col-lg-4 col-12 p-5  shadow shadow-dark text-light'  data-aos="fade-up-right" bg-secondary rounded >
                <SiMaterialdesign className='text-warning fs-1 d-block mx-auto '/>
                <h2 className='mt-3 text-center'>Material UI</h2> 
                </div>
                <div  className='col-lg-4 col-12 p-5  shadow shadow-dark text-light'  data-aos="fade-up-right" bg-secondary rounded >
                <IoIosCode className='text-warning fs-1 d-block mx-auto '/>
                <h2 className='mt-3 text-center'>Material UI Icons</h2> 
                </div>
                <div  className='col-lg-4 col-12 p-5   shadow shadow-dark  text-light'  data-aos="fade-up-right" bg-secondary rounded >
                <IoStatsChartSharp className='text-warning fs-1 d-block mx-auto'/>
                <h2 className='mt-3 text-center'>Awsome support</h2> 
                </div>








            </div>
        </div>
     )
}
export default AOSCC3