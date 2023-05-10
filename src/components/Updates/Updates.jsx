import React from 'react'
import './Updates.css'

import  {useState, useEffect, useRef} from 'react';
const Updates = () => {
  let menuRef = useRef();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <> <div className="update" ref={menuRef} onClick={()=>{setOpen(!open)}}>
    <img src="https://th.bing.com/th/id/OIP.rmim2jYzNpSCslo60INohQHaF9?pid=ImgDet&rs=1"/>
  </div>
  <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
       
        <ul>
          <DropdownItem  text = {"Profile 1"}/>
          <DropdownItem  text = {"Profile 2"}/>
          <DropdownItem text = {"Profile 3"}/>
          <DropdownItem  text = {"Profile 4"}/>
          <DropdownItem text = {"Profile 5"}/>
          <DropdownItem text = {"Profile 6"}/>
        </ul>
      </div></>
   
  )
}
function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default Updates
