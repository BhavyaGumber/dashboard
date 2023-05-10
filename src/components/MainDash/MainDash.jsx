import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import { useSelector } from "react-redux";
const MainDash = () => {
  const [dataArray,setdataArray] = useState([{}]);
  const [headings,setHeadings] = useState([]);
  const [mtmSum, setMtmSum] = useState(0);
  const checkedRows = useSelector(state => state.checkedRows);
  useEffect(()=>{
   
  dataFetchHandling()
  },[dataArray])
  
  const dataFetchHandling = ()=>{
    axios.get("http://172.16.1.24:5000/").then((res)=>{
     const data = res.data;
    //  console.log(data);
   
   
      const headArray = Object.keys(res.data[0]);
      // console.log(headArray);
      setHeadings(headArray);
      const arrayOfObjects= Object.entries(data).map(([id,value])=>
      ({id,...value})
      )
  //  console.log(arrayOfObjects)
   setdataArray(arrayOfObjects);
     

// console.log(rows)
// setData(rows);
    
  }).catch((err)=>{
    console.log(err)
  })
     const MtmSum = dataArray.reduce((acc,curr)=>{
      return acc+curr.MtM;
     },0)
     setMtmSum(MtmSum);
    //  console.log(mtmSum);
  }

  
  
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards mtmSum={mtmSum} />
      <Table checkedRows={checkedRows} headings={headings} dataArray={dataArray} />
    </div>
  );
};

export default MainDash;
