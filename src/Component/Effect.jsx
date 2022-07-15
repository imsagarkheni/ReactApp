import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [num,setNum]=useState(0)
    const onBtn =()=>{
        setNum(num+1)
    }
    useEffect(()=>{
  //  alert("hello")
    }, [num])
  return (
    <div style={{fontSize:"20px",margin:"30px"}}>
        <button onClick={onBtn}>click {num}</button>
    </div>
  )
}

export default Effect