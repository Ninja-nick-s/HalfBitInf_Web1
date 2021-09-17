import React, { useEffect, useState, useRef } from 'react'
import mainpage from './mainpage.module.css'
import Lottie from "lottie-web"

const Main =()=> {
    const container = useRef(null)
    useEffect(()=>{
        Lottie.loadAnimation({
        container:container.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData:require('./nodatajson.json')
        })
    })
    return(
        <div className={mainpage.main}>
            <div className={mainpage.topright}> </div>
            <div className={mainpage.bottomleft}> </div>
            <div className={mainpage.cover}>
                <div className={mainpage.left}>
                    
                </div>
                <div className={mainpage.middle}></div>
                <div className={mainpage.right} ref={container}>
                </div>
            </div>
            
        </div>
    )
}
export default Main;