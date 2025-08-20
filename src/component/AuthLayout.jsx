import React, { use } from 'react';
import { useEffect,useState, } from 'react';
import {useSelector} from "react-redux"
import {useNavigate} from 'react-router-dom'

function AuthLayout({children,authentication=true}) {
    const Navigate =useNavigate()
    const [loading,Setloading]=useState(true)
    const authstatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
        if (authentication && authstatus !== authentication) {
            Navigate('/login')
            
        }
        else if (!authentication && authstatus !== authentication){
            Navigate('/')
        }

    },[authstatus,Navigate,authentication])
    return ( loader ? <h1>Loading...</h1> : <>{children}</> );
}

export default AuthLayout;