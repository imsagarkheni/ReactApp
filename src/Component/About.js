import React from 'react';
import './About.css';


const About = () => {



    
    return (

        <div className="container my-3">
            <hr/>
            <h1 className='head'><em>Thank You! For Visiting.</em></h1><br/>
            <h3> Feel Free To Fill This Form<span style={{ color: 'red'}}>*</span></h3>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary my-2" onClick={() => alert("Thank You We'll never share your email with anyone else.")}>Submit</button>

            </form>
        </div>
    )
    }


export default About;