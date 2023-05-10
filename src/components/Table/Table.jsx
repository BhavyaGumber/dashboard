import * as React from "react";
import Table from "@mui/material/Table";
import { useState,useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setCheckedRows } from "../../redux/actions";
import Footer from "../Footer/Footer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MenuItem, FormControl, Select,InputLabel, Checkbox} from "@material-ui/core";
import Paper from "@mui/material/Paper";
import "./Table.css";
export default function BasicTable({headings, dataArray,sharedState}) {
  const dispatch = useDispatch();
  const checkedRows = useSelector(state=>state.checkedRows);
  // const [checkedRows, setCheckedRows] = useState([]);
  const handleCheckBoxChange = (index) => {
    const updatedRows = checkedRows.includes(index)
      ? checkedRows.filter(id => id !== index)
      : [...checkedRows, index];

    dispatch(setCheckedRows(updatedRows));
  };

  useEffect(()=>{
    console.log(checkedRows)
  },[checkedRows]);
  const isDropDownDisabled = checkedRows.length>0;
 
 return (
      <div className="Table">
      <h3>Recent Data</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          sx={{width:900,height:300}}
        >
          <Table sx={{ width:"max-content",height:"max-content" }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell>Action</TableCell>
              {/* <TableCell>Option_Type</TableCell> */}
              {headings.map((heading, index)=>{
                return (
                <TableCell key={index}>{heading}</TableCell>
                )
              })}
              </TableRow>
          </TableHead>
            <TableBody style={{ color: "white" }}>
           
              {dataArray.map((row,index) => (
                <>
    
                 <TableRow key={index}>
                 <TableCell style={{ width: "2px", height: "2px" ,margin:0, padding:0}}>
                 <Checkbox checked={checkedRows.includes(index)} onChange={()=>handleCheckBoxChange(index)}/>
                 </TableCell>
                  {headings.map((heading)=>(
                  <TableCell key={heading}>{row[heading]}</TableCell>
                  ))}
                </TableRow>
                </>
              ))}
              </TableBody>
               
              
          </Table>
        </TableContainer>
        
      </div>
  );
}