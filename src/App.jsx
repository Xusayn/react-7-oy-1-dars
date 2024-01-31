import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/login/Login'
import Students from './components/students/Students'
import Teachers from './components/teachers/Teachers'
import Profile from './components/profile/Profile'
import './App.css'
import Addstudent from './components/addstudent/Addstudent'
import Addteacher from './components/addteacher/Addteacher'
const App = () => {
  const [admin,setadmin]=useState('')
  const [adminn,setadminn]=useState('')
  const [set,setset]=useState(true) 
  
  



  const [loading,setloading]= useState(false)
  const [data,setdata]= useState([])
  const [error,seterror]= useState(false)

  const fetchget= async()=>{
      setloading(true)
      try {
      const res=await axios.get(`http://localhost:3000/students`)
      const dataa=await res.data
      setdata(dataa)
      } catch (err) {
          seterror(err)
      }finally{
          setloading(false)
      }
  }

  useEffect(()=>{
      fetchget()
  },[])



  

  const handlset=()=>{
    setset(!set)
  }
  const navigate=useNavigate()
  useEffect(()=>{
    {admin?navigate('/'):navigate('/login')}
  },[])
  return (
    <div className='app'>
      
      {admin?<nav>
        <NavLink to='/students'><h2>Students</h2></NavLink>
        <NavLink to='/teachers'><h2>Teachers</h2></NavLink>
        <NavLink to='/'><h2>Profile</h2></NavLink>
      </nav>:<nav>
        <NavLink to='/login'><h2>Login</h2></NavLink>
        
      </nav>}


    {set?<div className="sidebar">
      <i  onClick={handlset} className="fa-solid fa-bars"></i>
      </div>:<div className="sidebarr">
      <i onClick={handlset} className="fa-solid fa-bars"></i>
      {admin?<h1>Welcome : {admin}</h1>:null}
      </div>}
      
     



      <div className="container">
      <Routes>
        <Route path='/login' element={<Login setadmin={setadmin} setadminn={setadminn} admin={admin}/>}/>
        <Route path='/students' element={<Students loading={loading} data={data} error={error}/>}/>
        <Route path='/teachers' element={<Teachers loading={loading} data={data} error={error} />}/>
        <Route path='/' element={<Profile admin={admin} setadmin={setadmin} adminn={adminn}/>}/>
        <Route path='/adds' element={<Addstudent/>}/>
        <Route path='/addt' element={<Addteacher  />}/>

      </Routes>
      </div>
      
    </div>
  )
}

export default App
