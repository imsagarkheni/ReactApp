import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Component2/Home";
import About2 from "./Component2/About2";
import Contact from "./Component2/Contact";
import Gallery from "./Component2/Gallery";
import NavSection from "./Component2/NavSection";
import Footer from "./Component2/Footer";
import Error from "./Component2/Error";
import API from "./Component2/API";



function App() {

  // const ncard=(val)=>{
  //   return (

  //     <Card 
  //     imgsrc={val.imgsrc}
  //     title={val.title}
  //     data={val.data}
  //     sname={val.sname}
  //     />
  //   )
  // }

  return (
    <>

      <NavSection />
      <div>
        <div className="container">
          <div className="row my-5">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About2 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/api" element={<API />} />

              <Route path="*" element={ <Error/>} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="container" id="footer">
        <div className="row">

      <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
