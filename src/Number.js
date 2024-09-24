import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaSkyatlas } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaUser } from "react-icons/fa";


const Counter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // يبدأ العد مرة واحدة عند التمرير
    threshold: 0.1, // يبدأ العد عندما يظهر 10% من العنصر
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(targetNumber, 10); // الهدف النهائي
      if (start === end) return;

      let totalDuration = duration;
      let incrementTime = (totalDuration / end) * 1000; // الزمن بين كل زيادة

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer); // تنظيف الموقت عند اكتمال العد
    }
  }, [inView, targetNumber, duration]);

  return (
    <div ref={ref} style={{ fontSize: '48px', fontWeight: 'bold' }}>
      {count}
    </div>
  );
};




function Number() {
  return (
    <div>
      <div className='container row mx-auto mt-5 bg-dark rounded '>
        <div className='col-lg-3 col-12 p-5 bg-dark shadow shadow-dark text-warning'>
        <FaSkyatlas className='d-block mx-auto fs-1'/>
        <h3 className='pt-5 text-center'><Counter  targetNumber={3000} duration={2} /></h3>
        <h4 className='text-light text-center mt-5'>Happy clients</h4>
        
        </div>
        <div className='col-lg-3 col-12 p-5 bg-dark shadow shadow-dark  text-warning'>
        <FaHeart className='d-block mx-auto fs-1'/>
        <h3 className='pt-5 text-center'><Counter  targetNumber={6000} duration={2} /></h3>
        <h4 className='text-light text-center mt-5'>Projects Completed</h4>
        </div>
        <div className='col-lg-3 col-12 p-5 bg-dark shadow shadow-dark  text-warning'>
        <BiWorld className='d-block mx-auto fs-1'/>
        <h3 className='pt-5 text-center'><Counter  targetNumber={9000} duration={2} /></h3>
        <h4 className='text-light text-center mt-5'>Files Downloaded</h4>
        </div>
        <div className='col-lg-3 col-12 p-5 bg-dark shadow shadow-dark  text-warning'>
        <FaUser className='d-block mx-auto fs-1 '/> 
        <h3 className='pt-5 text-center'><Counter  targetNumber={12000} duration={2} /></h3>
        <h4 className='text-light text-center mt-5'>Lines of codes</h4>
        </div>



      </div>
    </div>
  )
}

export default Number
 