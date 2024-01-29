import axios from "axios"
import { useEffect, useState } from "react"

const getax=(url)=>{
    const [loading,setloading]= useState(false)
    const [data,setdata]= useState([])
    const [error,seterror]= useState(false)

    const fetchget= async()=>{
        setloading(true)
        try {
        const res=await axios.get(url)
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
    return{loading,data,error,setdata}
}
export default getax


