import { Button, Typography } from '@mui/material'
import React,{ useState} from 'react'


    const Counter = () => {
    
    var[count,setCount]= useState(0);
    const add = ()=>{
    console.log("add clicked");
    setCount(count+1)

    }
    const sub = ()=>{
        console.log("sub clicked");
        setCount(count-1)
    }
  return (
    <div>
        <Typography variant='h3' >Counter:{count}</Typography>
        <br />
        <Button variant='contained' onClick={add} color='primary'>+</Button>
        <Button variant='contained'onClick={sub} color='primary'>-</Button>
    </div>
  )
}

export default Counter