import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./foldername.module.css";
import { useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import Alert from "../../UI/Alert/Alert";
import Lottie from "lottie-web";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
let timer = null;
const SignIn = (props) => {
  const [error, errorStateUpdater] = useState(null);
  const toprightjson = useRef(null);
  const bottomleftjson = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: toprightjson.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/Card_jsons/toprightjson.json"),
    });
    Lottie.loadAnimation({
      container: bottomleftjson.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../General_Jsons/Card_jsons/bottomleft.json"),
    });
  }, []);

  const [Tile, setTitle] = useState("");
  const onChange = (e) =>{

    setTitle(e);
    console.log(e);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
    <div className={classes.topright} ref={toprightjson}></div>
      <header className={classes.header}>
        <h3>
          <span>Provide</span> Folder Name ...
        </h3>
      </header>
      <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
        <Input
          type="test"
          placeholder="Folder Name"
          onChange={(e) => onChange(e)}
        />
        

        <div className={classes.formActions}>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
      <div className={classes.bottomleft} ref={bottomleftjson}></div>
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
