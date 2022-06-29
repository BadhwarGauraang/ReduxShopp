import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link to={"/"} className="navbar-brand ml-5">
          Shop React Redux 
        </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        
        <li class="nav-item mx-5">
        <select id="area" name="area" size="1" >
                 <option >Thane</option>
                 <option >Pune</option>
                 <option >Mumbai</option>
                 <option >Nashik</option>
                 <option >Nagpur</option>
                 <option >Ahmednagar</option>
                 <option >Solapur</option>
                 <option >Delhi</option>
                 <option >Amritsar</option>
                 <option >Merut</option>
            </select>
        </li>
        <li class="nav-item mx-5">
        <select id="category" name="category" size="1" >
                 <option >Grocery</option>
                 <option >Butcher</option>
                 <option >Baker</option>
                 <option >Chemist</option>
                 <option >Stationary</option>
                 <option >Clothing</option>
                 
            </select>
        </li>
      </ul>
      
    </div>
  </div>
</nav>


    </>
  );
};

export default Navbar;
