import React, { useEffect, useState, useRef } from 'react'
import homepage from './HomePage.module.css'
import Lottie from "lottie-web"
import Navbar from "../UI/Navbar/Navbar";

const Home =()=> {
    const MainTopleft = useRef(null)
    const MainBottomright = useRef(null)
    useEffect(()=>{
        Lottie.loadAnimation({
            container:MainTopleft.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./homepagejson2.json')
        })
        Lottie.loadAnimation({
            container:MainBottomright.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./homepagejson3.json')
        })
    },[])
    
    return(
        <div className={homepage.main}>
            <div className={homepage.topright}> </div>
            <div className={homepage.bottomleft}> </div>
            <div className={homepage.navbar}>
                <Navbar currentActive={1}></Navbar>
            </div>
            
            <div className={homepage.cover}>
                    <div className={homepage.notejson2}  ref={MainTopleft} ></div>
                    <div className={homepage.notejson3}  ref={MainBottomright}></div>
                    <img src="/images/girlstudyhomepage.jpg"></img>
            </div>
            
        </div>
    )
}
export default Home;