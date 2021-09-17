import React, { useEffect, useState , useRef } from 'react'
import { NavLink } from 'react-router-dom';
import navbar from './Navbar.module.css'
import Lottie from "lottie-web"

const Navbar =(props)=> {
    const Home = useRef(null)
    const Login = useRef(null)
    const Dashboard = useRef(null)
    useEffect(()=>{
        Lottie.loadAnimation({
            container:Home.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../../General_Jsons/home.json')
        })
        Lottie.loadAnimation({
            container:Login.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../../General_Jsons/login.json')
        })
        Lottie.loadAnimation({
            container:Dashboard.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../../General_Jsons/profile.json')
        })
    },[])
    return(
      <div className={navbar.main}>

          <NavLink to="/" exact >
            <div className={`${navbar.icon} ${props.currentActive==1?navbar.active:null}`} ref={Home}></div>
          </NavLink>

          <NavLink to="/login" exact>
            <div className={`${navbar.icon} ${props.currentActive==2?navbar.active:null}`} ref={Login}></div>
          </NavLink>
          <NavLink to="/main" exact>
            <div className={`${navbar.icon} ${props.currentActive==3?navbar.active:null}`} ref={Dashboard}></div>
          </NavLink>
        </div>
    )
}
export default Navbar;