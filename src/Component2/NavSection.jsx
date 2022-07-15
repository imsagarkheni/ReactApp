import React from 'react'
import { NavLink } from "react-router-dom"
import './Img/NavSection.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AppleIcon from '@mui/icons-material/Apple';


const NavSection = () => {


  return (
    <>
      <div>

        <div className="container-fluid bg-dark">
          <nav class="navbar navbar-expand-lg navbar-primary bg-dark  ">
            <NavLink className="navbar-brand" to="/"><AppleIcon /> React App</NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/api">API</NavLink>
                </li>


              </ul>

            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavSection;

{/* <div className="menu_style">
        <h3 style={{color:'white', textAlign:'center'}}><AcUnitIcon/>React App</h3>
        <NavLink activeClassName='active_class' to="/"> Home</NavLink>
        <NavLink activeClassName='active_class' to="/about"> About Us</NavLink>
        <NavLink activeClassName='active_class' to="/contact">Contact Us</NavLink>
        <NavLink activeClassName='active_class' to="/gallery">Gallery</NavLink>
      </div> */}
