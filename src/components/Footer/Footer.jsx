import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { InputLabel,FormControl } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  select: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 200,
    height: 40,
   
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  button: {
    backgroundColor: '#E48080',
    
    color: '#fff',
    borderRadius: 5,
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
  const classes = useStyles();
  
 

  return (
    <>
    <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-lot">Select</InputLabel>
        <Select className={classes.select}
          labelId="select"
          id="select"
          value={"9"}
          label="Select"
        //   onChange={handleChange}
        >
         
          <MenuItem value={"Strategy"}>Strategy</MenuItem>
          <MenuItem value={"Instrument"}>Instrument</MenuItem>
          
        </Select>
   
      </FormControl>
     <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="select-lot">Select Lot</InputLabel>
        <Select className={classes.select}
          labelId="select-lot"
          id="select-lot"
          value={"9"}
          label="Select Lot"
        //   onChange={handleChange}
        >
         
          <MenuItem value={25}>25%</MenuItem>
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={75}>75%</MenuItem>
        </Select>
   
      </FormControl>
      
      <FormControl sx={{  minWidth: 120 }}>
        <InputLabel id="select-type">Select Type</InputLabel>
        <Select className={classes.select}
          labelId="select-type"
          id="select-type"
          value={"0"}
          label="Select Type"
       
        >
         
          <MenuItem value={"Nifty"}>Nifty</MenuItem>
          <MenuItem value={"Bank Nifty"}>Bank Nifty</MenuItem>
        
        </Select>
       
      </FormControl>
      <Button variant="contained" className={classes.button}>
        Submit
      </Button>
    </>
  );
}
