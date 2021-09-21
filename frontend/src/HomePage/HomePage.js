import React, { useEffect, useState, useRef } from 'react'
import homepage from './HomePage.module.css'
import Lottie from "lottie-web"
import Navbar from "../UI/Navbar/Navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home =(props)=> {
    const MainTopleft = useRef(null)
    const MainBottomright = useRef(null)
    const MainBoardright = useRef(null)
    const facebook = useRef(null)
    const instagram = useRef(null)
    const email = useRef(null)
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
        Lottie.loadAnimation({
            container:MainBoardright.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./mainboardjson.json')
        })
        Lottie.loadAnimation({
            container:facebook.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./facebookjson.json')
        })
        Lottie.loadAnimation({
            container:email.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./mailjson.json')
        })
        Lottie.loadAnimation({
            container:instagram.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./instagramjson.json')
        })
    },[])
    
    return(
        <div className={homepage.main}>
            <div className={homepage.topright}> </div>
            <div className={homepage.bottomleft}> </div>
            <div className={homepage.navbar}>
                <Navbar currentActive={1} isLogin={props.isAuthenticated==null?false:props.isAuthenticated}></Navbar>
            </div>
            
            <div className={homepage.cover}>
                    <div className={homepage.notejson2}  ref={MainTopleft} ></div>
                    <div className={homepage.notejson3}  ref={MainBottomright}></div>
                    <div className={homepage.left}>
                        <div className={homepage.head}>NOTE KEEPER</div>
                        <div className={homepage.quote}>If there was a wrong note, it didn't matter as long as it was rocking</div>
                        <div className={homepage.contact}>
                            <div className={homepage.contacticon} ref={facebook}></div>
                            <div className={homepage.contacticon} ref={email}></div>
                            <div className={homepage.contacticon} ref={instagram}></div>
                        </div>
                    </div>
                    <div className={homepage.right}>
                        <div className={homepage.mainboardjson} ref={MainBoardright}></div>
                        <div className={homepage.circle_cover}>
                            <div className={homepage.circle}></div>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}
Home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Home);