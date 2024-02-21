import { Button, TextField, Typography  } from '@mui/material'
import React ,{useState}from 'react'

const Signup = () =>{
var[data,setData]= useState();
const inputHandler =(e)=>{
    setData({...data,[e.target.name]:e.target.value});
    console.log(data);
}
  return (
    <div>
        <Typography variant='h1'>Sign up</Typography><br />
        <TextField variant='outlined' label="username"name="username"onChange={inputHandler}/><br /><br />
        <TextField variant='outlined' label="email" name="email"onChange={inputHandler}/><br /><br />
        <TextField variant='outlined' label="password" name="password"onChange={inputHandler}/><br /><br />
    
        <Button variant='outlined'>Submit</Button>
        </div>
  )
}

export default Signup