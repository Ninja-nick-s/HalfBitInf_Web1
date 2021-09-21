import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import navbar from "./Navbar.module.css";
import Lottie from "lottie-web";

const Navbar = (props) => {
  const Allfiles = useRef(null);
  const Create = useRef(null);
  const Deleted = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: Allfiles.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/allfiles.json"),
    });
    Lottie.loadAnimation({
      container: Create.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/create.json"),
    });
    Lottie.loadAnimation({
      container: Deleted.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/deleted.json"),
    });
      
    
  }, []);

  return (
    <div className={navbar.main}>
      <NavLink to="/" className={navbar.navlink} exact>
        <div 
          className={`${navbar.icon} ${
            props.currentActive == 1 ? navbar.active : null
          }`}
          ref={Allfiles}
        ></div>
        <div className={navbar.namecover}>
          <div
            className={`${navbar.name} ${
              props.currentActive == 1 ? navbar.active : null
            }`}
          >
            All Files
          </div>
        </div>
      </NavLink>
      <NavLink to="/main/create" className={navbar.navlink} exact>
        <div
          className={`${navbar.icon} ${
            props.currentActive == 2 ? navbar.active : null
          }`}
          ref={Create}
        ></div>
        <div className={navbar.namecover}>
          <div
            className={`${navbar.name} ${
              props.currentActive == 2 ? navbar.active : null
            }`}
          >
            Create
          </div>
        </div>
        </NavLink>
      
        <NavLink to="/login" className={navbar.navlink} exact>
        <div
          className={`${navbar.icon} ${
            props.currentActive == 3 ? navbar.active : null
          }`}
          ref={Deleted}
        ></div>
        <div className={navbar.namecover}>
          <div
            className={`${navbar.name} ${
              props.currentActive == 3 ? navbar.active : null
            }`}
          >
            Deleted
          </div>
        </div>
        </NavLink>
      

      
    </div>
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
