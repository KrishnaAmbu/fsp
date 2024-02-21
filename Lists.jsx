import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Lists = () =>{
   var[inp,setInp]= useState(["name"])
   var [data,setData]= useState("");
   
   
   const inputHandler =(e)=>{
    console.log("on")
    setData(e.target.value)
    console.log("inp",data)
   }
   const add = ()=>{
    console.log("c")
    setInp([...inp,data]);
    console.log("sub",inp)
    setData("");
   }
    
  return (
    <div >

        <Typography variant='h1'>List</Typography>
        <TextField variant='outlined' label="enter the name" value={data}
         onChange={inputHandler}></TextField><br /><br />
        <Button variant='contained' onClick={add}>Submit</Button>
        <br /><br />
        <ul>
            {inp.map((v,i)=>{
                return<li key={i}>{v}</li>
            })}
        </ul>
        
    </div>
  )
}

export default Lists