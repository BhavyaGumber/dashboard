import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
import "./MainDash.css";
import { useSelector } from "react-redux";
const MainDash = () => {
  const [dataArray,setdataArray] = useState([{}]);
  const [headings,setHeadings] = useState([]);
  const [mtmSum, setMtmSum] = useState(0);
  const [sortedData, setSortedData] = useState([]);
  const checkedRows = useSelector(state => state.checkedRows);
  useEffect(()=>{
   
  dataFetchHandling()
  },[dataArray])
  
  const dataFetchHandling = ()=>{
    axios.get("http://14.99.241.31:5000/").then((res)=>{
     const data = res.data;
    
   
   
      // const headArray = Object.keys(res.data[0]);
      
      // setHeadings(headArray);
      const arrayOfObjects= Object.entries(data).map(([id,value])=>
      ({id,...value})
      )
    
   setdataArray(arrayOfObjects);
   

    
  }).catch((err)=>{
    console.log(err)
  })
  const objData = dataArray.map(({
    Buying_Avg_Price,
    Exchange_InstrumentID,
    Exchange_Segment,
    Index_Num,
    LTP,
    MtM,
    Option_Type,
    Realized,
    Sell_Qty,
    Selling_Avg_Price,
    Stopl_Loss_Price,
    Strategy_Name,
    Strategy_Status,
    Ticker,
    UnRealized,
  }) => {
    return {
      Index_Num,
      Selling_Avg_Price,
      Buying_Avg_Price,
      Option_Type,
      Sell_Qty,
      Exchange_InstrumentID,
      Exchange_Segment,
      LTP,
      Stopl_Loss_Price,
      Strategy_Name,
      Strategy_Status,
      Ticker,
      Realized,
      UnRealized,
      MtM,
    };
   }) 
   const sort = objData.sort((a,b)=>
    a.Index_Num - b.Index_Num
    
   )
   setSortedData(sort);

    
   


  
     const MtmSum = dataArray.reduce((acc,curr)=>{
      return acc+curr.MtM;
     },0)
     setMtmSum(MtmSum);
    
  }

  const headData = [
    "Index_Num",
"Selling_Avg_Price",
"Buying_Avg_Price",
    "Option_Type",
    "Sell_Qty",
    "Exchange_InstrumentID",
    "Exchange_Segment",
    "LTP",
    "Stopl_Loss_Price",
    "Strategy_Name",
    "Strategy_Status",
    "Ticker",
    "Realized",
    "UnRealized",
    "MtM",
  ]

  
  
  return (
    <div className="MainDash">
      <h1 style={{textAlign:"center"}}>Dashboard</h1>
      <Cards mtmSum={mtmSum} />
      <Table checkedRows={checkedRows} headData={headData} sortedData={sortedData}/>
      <Footer/>
    </div>
  );
};

export default MainDash;
