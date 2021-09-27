import React, { useEffect, useState, useRef } from "react";
import classes from "./Welcome.module.css";
import { Link, Redirect } from "react-router-dom";
import SignIn from "./forms/SignIn";
import SignUp from "./forms/SignUp";
import Button from "../UI/Button/Button";
import CustomModal from "../UI/Modal/Modal";
import Lottie from "lottie-web";
import Navbar from "../UI/Navbar/Navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
let form;
const Welcome = (props) => {
  const [digits, digitsUpdater] = useState(null);
  const [openModal, modalStateUpdater] = useState(-1);

  if (openModal === 0)
    form = (
      <SignIn
        onClose={modalStateUpdater.bind(this, -1)}
        changeState={modalStateUpdater}
        isOpen={openModal !== -1}
      />
    );
  else if (openModal === 1)
    form = (
      <SignUp
        onClose={modalStateUpdater.bind(this, -1)}
        changeState={modalStateUpdater}
        isOpen={openModal !== -1}
      />
    );
  // else if (openModal === 2)
  //   form = <ForgotPassword onClose={modalStateUpdater.bind(this, -1)} changeState={modalStateUpdater} isOpen={openModal !== -1} />
  // else if (openModal === 3)
  //   form = <CompleteSignUp isOpen={openModal !== -1} />

  const container = useRef(null);
  const container1 = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../General_Jsons/Welcome_jsons/welcomejson.json"),
    });
    Lottie.loadAnimation({
      container: container1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../General_Jsons/Welcome_jsons/pumpkinjson.json"),
    });
  }, []);
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <CustomModal isOpen={openModal !== -1}>
        {form}
      </CustomModal>
      <div className={classes.welcome}>
        <div className={classes.topright}> </div>
        <div className={classes.bottomleft}> </div>
        <div className={classes.navbar}>
          <Navbar currentActive={2}></Navbar>
        </div>
        <div className={classes.board}>
          <div className={classes.left}>
          <div className={classes.circlewelcome_cover}>
              <div className={classes.circlewelcome}></div>
          </div>

            <div className={classes.bottomimg} ref={container1}></div>
            <div className={classes.btn}>
              <Button onClick={modalStateUpdater.bind(this, 0)}>Login</Button>
              <div className={classes.or}>- or -</div>
              <Button onClick={modalStateUpdater.bind(this, 1)}>
                Join Now
              </Button>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.quote} ref={container}></div>
            <img src="/images/back.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};
Welcome.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Welcome);