import React from 'react'
import { Sdata } from './Sdata';
// import App from '../App'

const Card = (props) => {
    return (

        <>
            <div className="card my-3" style={{width:"100%"}}  >
                <img className="card-img-top" src={props.imgsrc} alt="Card image" style={{ height: '40vh' }} />
                <div className="card-body" style={{color:'black'}}>
                    <h5 className="card-title" >{props.title}</h5><span class="badge bg-primary">New</span>
                    <h3>{props.sname}</h3>
                    <p className="card-text">{props.data} </p>
                    <a href="/" className="btn btn-primary">Browse</a>
                </div>
            </div>
        </>
    )
}

export default Card;
