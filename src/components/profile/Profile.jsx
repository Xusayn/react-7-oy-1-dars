import React from 'react'
import './Profile.scss'
import { useNavigate } from 'react-router-dom'
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
      <h1>Welcome : {admin}, </h1>
      <h1>Username : {adminn}</h1>
      <button onClick={handlprf}>Logout</button>
    </div>
  )
}

export default Profile
