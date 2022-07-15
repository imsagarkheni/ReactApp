import { textAlign } from '@mui/system';
import React from 'react'
import error from "../Component2/Img/err.gif"
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
    <div className="text-center">
      <NavLink to="/"> <div className="btn btn-primary"> Go Back To HomePage</div> </NavLink>
      </div>
      <div className='text-center '>
        <img src={error} alt="" />
      </div>
    </>
  )
}

export default Error;
