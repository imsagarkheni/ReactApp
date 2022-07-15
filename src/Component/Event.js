import React, { useState } from 'react'

const Event = () => {
const [hello,setHello]=useState({
    name:"",
    fName:"",
    address:"",
    age:""
})
// const [click,setClick]=useState("")

    const onInput =(e)=>{
       const {name,value}=e.target
       setHello({...hello , [name] : value})
    }


    const onSub= (e)=>{
        e.preventDefault()
        console.log("Name",hello)
       
    }
    return (
        <> 
<div>
    <form action="" onSubmit={onSub}>
        <input type="text"  id="" name="name" value={hello.name}  onChange={onInput}/><br></br>
        <input type="text"  id="" name="fName" value={hello.fName}  onChange={onInput}/><br></br>
        <input type="text"  id="" name="address" value={hello.address}  onChange={onInput}/><br></br>
        <input type="text"  id="" name="age" value={hello.age}  onChange={onInput}/><br></br>
        <button type='submit'>submit</button>
    </form>
</div>
        </>

    )
}

export default Event