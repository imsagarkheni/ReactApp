import React, { useState } from "react";
import "./Todolist.css";
import Todocom from "./Todocom";

const Todolist = () => {
  const [item, setitem] = useState("");
  const [btn, setbtn] = useState([]);

  const items = (event) => {
    setitem(event.target.value);
  };
  const itemlist = () => {
    setbtn((olditem) => {
      return [...olditem, item];
    });
    setitem("");
  };

  const cutIt =(id)=>{
    console.log("deleted");
    setbtn((olditem)=>{
      return olditem.filter((arrElem,index)=>{
        return index !== id;
      })
    })
}

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="main-div">
              <div className="center">
                <br />
                <h1>To do List</h1>
                <br />
                <input
                  type="text"
                  placeholder="Add items"
                  onChange={items}
                  value={item}
                />
                <button onClick={itemlist}> ADD </button>
                <ol>
                  {btn.map((val, index) => {
                    return <Todocom key={index} 
                    text={val}
                    id={index}
                    onSelect={cutIt} />;
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
