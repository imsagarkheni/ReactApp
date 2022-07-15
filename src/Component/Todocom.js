import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


const Todocom = (props) => {

    

    


  return (
    <>
    <div className="container">
        <div className="row my-2">
            <div className="col d-flex justify-content-between ">
            <li style={{listStyle:"none"}}> {props.text}
                </li><span style={{color:"red"}}
              onClick={()=>{props.onSelect(props.id)} }>
                <DeleteIcon/></span>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Todocom