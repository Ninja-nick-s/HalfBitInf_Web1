import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./Share.module.css";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
let timer = null;
const SignIn = (props) => {
  const container = useRef(null);
  const container1 = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Jsons/share1.json"),
    });
    Lottie.loadAnimation({
      container: container1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Jsons/share2.json"),
    });
  }, []);
  return (
    <>
      {/* <Alert error={error} onClose={errorStateUpdater.bind(this, null)} /> */}
      <header className={classes.header}>
        <h3>
          <span>Email</span> to Share note to?
        </h3>
      </header>
      <div className={classes.topright} ref={container}></div>
      <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
        <Input
          type="email"
          placeholder="Email"
          isValid={true}
        />
        <div className={classes.formActions}>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit"><i className="fas fa-share-alt"></i>&nbsp; Share</Button>
        </div>
      </form>
      
      <div className={classes.bottomleft} ref={container1}></div>
    </>
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(SignIn);
