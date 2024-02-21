import { Button, TextField,Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div><br /><br /><br />
    <h1>Login Page</h1>
        <input placeholder='username'/>
        <br />
        <input placeholder='password'/>
        <br /><br />
        <button>Submit</button>
        <br /><br /><br /><br />

        <Typography variant='h1'>Login Page</Typography>
        <br /><br />
        <TextField variant='outlined' label="username"/>
        <br />
        <TextField variant='outlined' label="password"/><br /><br />
        <Button variant='contained' >submit</Button><br />
        <Button variant='text' >submit</Button><br />
        <Button variant='outlined' >submit</Button>
    </div>
  )
}

export default Login