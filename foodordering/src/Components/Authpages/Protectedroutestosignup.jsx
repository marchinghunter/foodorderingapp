import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protectedroutestosignup = (props) => {
  const {Component} = props
  const navigate  = useNavigate();
  const {isLoggedIn} = useSelector(state=>state.userSlice)
  useEffect(()=>{
    if(isLoggedIn===false){
      navigate('/login')
    }
  },[isLoggedIn,navigate])
  return (
    <><Component/></>
  )
}

export default Protectedroutestosignup