import React from "react"



export const Navbar = (props) => {


 const itemSearch =()=>{
      alert("Don't Search Anything!")
 }
 const alertMsg=()=>{
        return alert(" If You Are a Nice Person, Don't Click Again :)")
  }
  return (
    <>

<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.contact}</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="Search" placeholder="Search" onChange={itemSearch} aria-label="Search"/>
        <button className="btn btn-success" type="button" onClick={alertMsg}>Search</button>
      </form>
    </div>
  </div>
</nav>
    
    
    
    </>
  )
}

export default Navbar;
