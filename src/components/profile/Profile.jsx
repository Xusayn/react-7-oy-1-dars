import React from 'react'
import './Profile.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
const Profile = ({admin,setadmin,adminn}) => {
  const navigate=useNavigate()
  const handlprf=()=>{
    if(confirm('Are you want to exit')){
      setadmin('')
      navigate('/login')
    }else{

    }

  }



  return (
    <div className='prf'>
      <Typography variant='h1'>Welcome : {admin},</Typography>
      <Typography variant='h1'>UserName: {adminn}</Typography>
      <Stack>
        <Button onClick={handlprf} variant='contained'>Logout</Button>
      </Stack>
      
    </div>
  )
}

export default Profile
