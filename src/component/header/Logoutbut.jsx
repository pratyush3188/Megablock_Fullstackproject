import React from 'react';
import { useDispatch } from 'react-redux';
import authservice from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function Logoutbtn() {
    const dispatch =useDispatch()
    const handlelogout =()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    
    }
    return ( <>
    <button onClick={handlelogout}>Logout</button>
    
    </> );
}

export default Logoutbtn;