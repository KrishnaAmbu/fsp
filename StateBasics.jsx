import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setFname]= useState("krishna");
    var[val,setVal]= useState();
        const handleInput =(e)=>{
        //console.log(e.target.value);
        setVal(e.target.value);
      
 
    }
    const submitHandler=()=>{
    console.log("clicked");
    setFname(val);
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {fname}</Typography>
        <br /><br />
        <TextField variant='outlined' onChange={handleInput} label="type your name"></TextField>
        <br />
        <Button variant='contained' onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default StateBasics