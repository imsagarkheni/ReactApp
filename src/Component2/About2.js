import React from 'react'
import './Home.css';
import web from "../Component2/Img/image2.gif"
import Common from './Common';

const About2 = () => {
    return (
        <>
           <Common name="About Page"
            imgsrc={web}
             visit="/gallery"
             btname="See Gallery" /> 
        </>
    )
}

export default About2
