import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import homepage from "./HomePage.module.css";
import Lottie from "lottie-web";
import Navbar from "../UI/Navbar/Navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useWindowDimensions from "../utils/useWindowDimensions";

const Home = (props) => {
  const { width } = useWindowDimensions();
  const MainTopleft = useRef(null);
  const MainBottomright = useRef(null);
  const MainBoardright = useRef(null);
  const Github = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: MainTopleft.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../General_Jsons/Homepage_jsons/homepagejson2.json"),
    });
    Lottie.loadAnimation({
      container: MainBottomright.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../General_Jsons/Homepage_jsons/homepagejson3.json"),
    });
    Lottie.loadAnimation({
      container: MainBoardright.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../General_Jsons/Homepage_jsons/mainboardjson.json"),
    });
    Lottie.loadAnimation({
      container: Github.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../General_Jsons/Homepage_jsons/githubjson.json"),
    });
  }, []);

  return (
    <>
      <div className={homepage.main}>
        <div className={homepage.topright}> </div>
        <div className={homepage.bottomleft}> </div>
        <div className={width > 800 ? homepage.navbar : homepage.mobilenavbar}>
          <Navbar
            currentActive={1}
            isLogin={
              props.isAuthenticated == null ? false : props.isAuthenticated
            }
          ></Navbar>
        </div>

        <div className={homepage.cover}>
          <div className={homepage.notejson2} ref={MainTopleft}></div>
          <div className={homepage.notejson3} ref={MainBottomright}></div>
          <div className={homepage.left}>
            <div className={homepage.head}>NOTE KEEPER</div>
            <div className={homepage.quote}>
              If there was a wrong note, it didn't matter as long as it was
              rocking
            </div>
            <NavLink
              to={props.isAuthenticated ? "/main" : "/login"}
              className={homepage.navlink}
              exact
            >
              Get Started
            </NavLink>
            <div className={homepage.contact}>
              <a
                className={homepage.contacticon}
                ref={Github}
                href="https://github.com/Ninja-nick-s/HalfBitInf_Web1.git"
                target="_blank"
              ></a>
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
    </>
  );
};
Home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Home);
