import React from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section className='d-flex  align-items-center' id='header'>
                <div className="container">
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className="row ">
                                <div className="col-md-6 order-1 order-lg-1">
                                    <img src={props.imgsrc} className="image1" alt="Image" />
                                </div>
                                <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-2">
                                    <h1>
                                        {props.name}<br/> <strong className='brand'>React App</strong>
                                    </h1>
                                    <h2 className='my-3'>
                                        We are the team of talented developer making website.
                                    </h2>
                                    <div className="mt-5">
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Common
