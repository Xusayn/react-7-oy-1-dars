import React, { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Stack, TextField, Typography } from '@mui/material'
const Login = ({setadmin,admin,setadminn}) => {
  const navigate=useNavigate()
  const [ad,setad]=useState('')
  
  const handlsubmit=(e)=>{
    e.preventDefault()
    setadmin(ad)

   
  }
  {admin?navigate('/'):null}




  
  return (
    <div className='div'>
      
        
          <Stack className='st'>
          <TextField className='inp' onChange={(e)=>setad(e.target.value)} label="Name" variant='outlined'/>
          <TextField  className='inp' onChange={(e)=>setadminn(e.target.value)} label="UserName" variant='outlined'/>
            <Button className='btn' variant='contained'  onClick={handlsubmit}>Login</Button>
          </Stack>
          {/* <form onSubmit={handlsubmit}>
        {/* <input placeholder='Name...'  onChange={(e)=>setad(e.target.value)} type="text" />
        <input placeholder='UserName...' onChange={(e)=>setadminn(e.target.value)} type="text" />
        <button>Login</button> */}
      {/* </form> */} 
    </div>
  )
}

export default Login
