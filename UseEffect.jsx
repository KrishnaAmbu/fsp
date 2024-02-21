import { Typography ,Button} from '@mui/material'
import React, { useEffect ,useState} from 'react'

const UseEffect =()=>{
    var[x,setx]=useState();
    const inpt= ()=>{
        setx("React");
        }
    const inpt1 = ()=>{
            setx("angular");
            }
    const inpt2 = ()=>{
            setx("next");
                    
        }

useEffect(()=>{
    inpt1();},
  [])
  return (
    <div>
        <Typography variant='h1'>welcome to {x}</Typography>
        <br /><br /><br />
        <Button variant='contained' color="primary" onClick={inpt}>React</Button>&nbsp;&nbsp;
        <Button variant='contained' color="primary"onClick={inpt1}>Angular</Button>&nbsp;&nbsp;
        <Button variant='contained' color="primary"onClick={inpt2}>Next</Button>&nbsp;&nbsp;
    </div>
  )
}

export default UseEffect