import React from 'react';
import { useState } from 'react';
import "./Footer.css"
import { setDropdownValue } from '../../redux/actions';
import { makeStyles } from '@mui/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { InputLabel,FormControl,Box } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  select: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 150,
    height: 40,
    border:"none",
    outline:"none",
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  label:{
    color: 'red',
    fontSize: '16px',
    transform: 'translate(0, 1.5px) scale(0.75)',
  },
  
  button: {
    backgroundColor: '#E48080',
    borderRadius:50,
    color: '#fff',
   
    width: 200,
    height: 40,
    margin: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#E06E6E',
    },
  },
//   menuItem: {
//     '&:hover': {
//       backgroundColor: '#f0f0f0',
//     },
//   },
}));

export default function Footer() {
  const dispatch = useDispatch();
  const dropdownValues = useSelector((state) => state.dropdownValues);
  const classes = useStyles();
  const checkedRows = useSelector(state => state.checkedRows);
  const isInstrumentDisabled = checkedRows.length > 0;
  
  const submitHandler=()=>{
    console.log(checkedRows);
    console.log(dropdownValues);
  }
  const handleDropdownChange = (event,dropdownId) => {
    console.log(event)
    const selectedValue = event.target.value;
    dispatch(setDropdownValue(dropdownId, selectedValue));
  };

  return (
    <div className="footer" style={{display:"flex"}}>
     
   
     <FormControl sx={{ minWidth: 120 }} size="small">
        <InputLabel style={{color:"black",fontSize: '16px', transform: 'translate(50px, 1.5px) scale(0.75)'}} className={classes.label} id="select1">Select</InputLabel>
        <Select className={classes.select}
          labelId="select1"
          id="select1"
          value={dropdownValues.dropdown1}
          label="Select"
         
          onChange={(event) => handleDropdownChange(event, 'dropdown1')}
        >
         
          <MenuItem value={"Strategy"}>Strategy</MenuItem>
         <MenuItem disabled={isInstrumentDisabled} value={"Instrument"}>Instrument</MenuItem>
        </Select>
   
      </FormControl>
      
      
      <FormControl sx={{  minWidth: 120 }}>
        <InputLabel style={{color:"black",fontSize: '16px', transform: 'translate(50px, 1.5px) scale(0.75)'}} className={classes.label} id="select2">Select Lot</InputLabel>
        <Select className={classes.select}
          labelId="select2"
          id="select2"
          value={dropdownValues.dropdown2}
          label="Select Lot"
         
       onChange={(event) => handleDropdownChange(event, 'dropdown2')}
        >
         
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={75}>75</MenuItem>
        
        </Select>
       
      </FormControl>
      <FormControl sx={{  minWidth: 120 }}>
        <InputLabel style={{color:"black",fontSize: '16px', transform: 'translate(50px, 0.7px) scale(0.75)'}} className={classes.label} id="select3">Select Type</InputLabel>
        <Select disabled={isInstrumentDisabled || dropdownValues.dropdown1==="Strategy"} className={classes.select}
          labelId="select3"
          id="select3"
          value={dropdownValues.dropdown3}
         
          label="Select Type"
          onChange={(event) => handleDropdownChange(event, 'dropdown3')}
       
        >
         
          <MenuItem value={"Nifty"}>Nifty</MenuItem>
          <MenuItem value={"Bank Nifty"}>Bank Nifty</MenuItem>
        
        </Select>
       
      </FormControl>
      <Button onClick={submitHandler} variant="contained" className={classes.button}>
        Submit
      </Button>
    </div>
  );
}
