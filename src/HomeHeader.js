import React from 'react'

function HomeHeader() {
  return (
    <div className='container mx-auto' >
      <nav class="navbar navbar-expand-sm  navbar-dark">
  <div class="container-fluid ">
    <a class="navbar-brand px-5" href="#">Alamany</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item px-2">
          <a class="nav-link px-2" href="#">Home</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link px-2" href="#">About</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link px-2" href="#">Sevices</a>
        </li>  
        <li class="nav-item px-2">
          <a class="nav-link px-2" href="#">Portfolio</a>
        </li>  
        <li class="nav-item px-2">
          <a class="nav-link px-2" href="#">Blog</a>
        </li>  
        <li class="nav-item px-2">
          <a class="nav-link px-2" href="#">Contant</a>
        </li>  
       
        
      </ul>
    </div>
  </div>
</nav>  
   

    </div>
  )
}

export default HomeHeader