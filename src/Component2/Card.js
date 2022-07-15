import React, { useEffect, useState } from "react";
import Sdata from '../Component/Sdata'
import { NavLink } from "react-router-dom";

const Gallery = () => {
    
    return (
        <>
            
                    {Sdata.map((val) => {
                        return (
                            <>

                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src={val.imgsrc}
                                        alt="Card image"
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">{val.title}</h4>
                                        <p className="card-text">{val.data}</p>
                                        <NavLink to='' className="btn btn-primary">
                                            {val.sname}
                                        </NavLink>
                                    </div>
                                </div>

                            </>
                        );
                    })}
                
        </>
    );
};

export default Gallery;
