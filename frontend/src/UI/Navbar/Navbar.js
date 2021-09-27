import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import navbar from "./Navbar.module.css";
import useWindowDimensions from '../../utils/useWindowDimensions'
import Lottie from "lottie-web";
import MobileNav from "./MobileNav";

const Navbar = (props) => {
  
  const { width } = useWindowDimensions()
  const Home = useRef(null);
  const Login = useRef(null);
  const Dashboard = useRef(null);
  const MainNote = useRef(null);
  const Logout = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: Home.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/Navbar_jsons/home.json"),
    });
  }, []);

  useEffect(() => {
    Lottie.loadAnimation({
      container: Login.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/Navbar_jsons/login.json"),
    });
    Lottie.loadAnimation({
      container: Dashboard.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/Navbar_jsons/profile.json"),
    });
    Lottie.loadAnimation({
      container: Logout.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/Navbar_jsons/logout.json"),
    });
    Lottie.loadAnimation({
      container: MainNote.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/Navbar_jsons/main.json"),
    });
    //console.log("Ok", props.isLogin, props.currentActive);
  }, [props.isLogin]);

  return (
    <>
    {width<800?
    
    <MobileNav isLogin={props.isLogin} logout={props.logout} currentActive={props.currentActive} />
    
    :
      <div className={navbar.main}>
      <NavLink to="/" className={navbar.navlink} exact>
        <div
          className={`${navbar.icon} ${
            props.currentActive == 1 ? navbar.active : null
          }`}
          ref={Home}
        ></div>
        <div className={navbar.namecover}>
          <div
            className={`${navbar.name} ${
              props.currentActive == 1 ? navbar.active : null
            }`}
          >
            Home
          </div>
        </div>
      </NavLink>

      {props.isLogin ? (
        <>
          <NavLink to="/main" className={navbar.navlink} exact>
            <div
              className={`${navbar.icon} ${
                props.currentActive == 3 ? navbar.active : null
              }`}
              ref={MainNote}
            ></div>
            <div className={navbar.namecover}>
              <div
                className={`${navbar.name} ${
                  props.currentActive == 3 ? navbar.active : null
                }`}
              >
                Note
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/"
            onClick={props.logout}
            className={navbar.navlink}
            exact
          >
            <div
              className={`${navbar.icon} ${
                props.currentActive == 2 ? navbar.active : null
              }`}
              ref={Logout}
            ></div>
            <div className={navbar.namecover}>
              <div
                className={`${navbar.name} ${
                  props.currentActive == 2 ? navbar.active : null
                }`}
              >
                Logout
              </div>
            </div>
          </NavLink>
        </>
      ) : (
        <NavLink to="/login" className={navbar.navlink} exact>
          <div
            className={`${navbar.icon} ${
              props.currentActive == 2 ? navbar.active : null
            }`}
            ref={Login}
          ></div>
          <div className={navbar.namecover}>
            <div
              className={`${navbar.name} ${
                props.currentActive == 2 ? navbar.active : null
              }`}
            >
              Login
            </div>
          </div>
        </NavLink>
      )}
    </div>
    }
    </>
    
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
