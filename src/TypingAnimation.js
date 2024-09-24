import React  from 'react'
import { ReactTyped } from 'react-typed'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";


const TypingAnimation =() => {
  return (
    <div>
      <h2 className='text-warning text-center mt-5 fs-1 fw-bolder p-3'>
      <ReactTyped 
        strings={['Hello! I am Amani','                                         ','This is My portfolio','                                                           ']}
      
        
        loop/>
        <p className={'ll rounded-circle'}></p>
      </h2>
      <div className='p-3  col-lg-4  col-12  mx-auto'>
       <button  className='btn btn-outline-warning mx-2'>All</button>
       <button  className='btn btn-outline-warning  mx-2'>Marketting</button>
       <button  className='btn btn-outline-warning  mx-2'>Design</button>
       <button  className='btn btn-outline-warning  mx-2'>Development</button>
      </div>
      <div className='container row  mx-auto rounded mt-5 p-5'>

<div className='col-lg-4 col-12 p-5  bg-light shadow shadow-dark rel r1 rounded'>
 
  <div className={'abs bg-primary p-5'}>
  <FaFacebookSquare   className='fs-1 fw-bolder text-light d-block mx-auto' />
  <FaLinkedin   className='fs-1 fw-bolder text-light d-block mx-auto' />
  <FaSquareWhatsapp   className='fs-1 fw-bolder text-light d-block mx-auto' />

  </div>
  <div className='p-5'></div>
  <div className='p-5'></div>

</div>
<div className='col-lg-4 col-12 p-5  bg-light shadow shadow-dark rel r2 rounded'>
<div className={'abs bg-warning p-5'}>
<FaFacebookSquare   className='fs-1 fw-bolder text-dark d-block mx-auto' />
  <FaLinkedin   className='fs-1 fw-bolder text-dark d-block mx-auto' />
  <FaSquareWhatsapp   className='fs-1 fw-bolder text-dark d-block mx-auto' />



</div>
<div className='p-5'></div>
<div className='p-5'></div>
</div>
<div className='col-lg-4 col-12 p-5  bg-light shadow shadow-dark rel r3 rounded'>
<div className={'abs bg-secondary p-5'}>
<FaFacebookSquare   className='fs-1 fw-bolder text-light d-block mx-auto' />
  <FaLinkedin   className='fs-1 fw-bolder text-light d-block mx-auto' />
  <FaSquareWhatsapp   className='fs-1 fw-bolder text-light d-block mx-auto' />

</div>
<div className='p-5'></div>
<div className='p-5'></div>
</div>
<div className='col-lg-4 col-12 p-5  bg-light shadow shadow-dark rel r4 rounded mt-5'>
<div className={'abs bg-light p-5'}>
<FaFacebookSquare   className='fs-1 fw-bolder text-dark d-block mx-auto' />
  <FaLinkedin   className='fs-1 fw-bolder text-dark d-block mx-auto' />
  <FaSquareWhatsapp   className='fs-1 fw-bolder text-dark d-block mx-auto' />

</div>
<div className='p-5'></div>
<div className='p-5'></div>
</div>
<div className='col-lg-4 col-12 p-5  bg-light shadow shadow-dark rel r5 rounded mt-5'>
<div className={'abs bg-info p-5 shadow shadow-dark'}>
<FaFacebookSquare   className='fs-1 fw-bolder text-light d-block mx-auto' />
  <FaLinkedin   className='fs-1 fw-bolder text-light d-block mx-auto' />
  <FaSquareWhatsapp   className='fs-1 fw-bolder text-light d-block mx-auto' />

</div>
<div className='p-5'></div>
<div className='p-5'></div>
</div>
<div className='col-lg-4 col-12 p-5  bg-light shadow shadow-dark rel r6 rounded mt-5'>
<div className={'abs bg-success p-5'}>
<FaFacebookSquare   className='fs-1 fw-bolder text-light d-block mx-auto' />
  <FaLinkedin   className='fs-1 fw-bolder text-light d-block mx-auto' />
  <FaSquareWhatsapp   className='fs-1 fw-bolder text-light d-block mx-auto' />

</div>
<div className='p-5'></div>
<div className='p-5'></div>
</div>





      </div>
    </div>
  )
}

export default TypingAnimation