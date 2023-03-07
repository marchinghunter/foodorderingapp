import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Protectedroutestoapp = (props) => {
    const {Component} = props;
    const  navigate  = useNavigate();
    const {isLoggedIn} = useSelector(state=>state.userSlice)
    useEffect(()=>{
        if(isLoggedIn===true){
            navigate('/app')
        }
    },[isLoggedIn, navigate])
  return (
    <>
        <Component/>
    </>
  )
}

export default Protectedroutestoapp