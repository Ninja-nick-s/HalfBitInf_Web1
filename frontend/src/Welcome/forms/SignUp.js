import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./Form.module.css";
import { useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import Alert from "../../UI/Alert/Alert";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import Lottie from "lottie-web";
let timer = null;
const SignUp = (props) => {
  const [error, errorStateUpdater] = useState(null);

  const container = useRef(null);
  const container1 = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./json_for_signup/signupjson_topleft.json"),
    });
    Lottie.loadAnimation({
      container: container1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./json_for_signup/signupjson_bottomright.json"),
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert("password do not match");
    } else {
      props.register({ name, email, password });
    }
  };
  // Redirect if is Logged in
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <header className={classes.header}>
        <h3>
          Let's get <span>started</span>
        </h3>
      </header>
      <div className={classes.topleft} ref={container}></div>
      <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
        <Input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <div className={classes.siblingFields}>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        {
          <div className={classes.formActions}>
            <Button onClick={props.onClose}>Cancel</Button>
            <Button type="submit">Sign Up</Button>
          </div>
        }
      </form>
      {
        <div className={classes.additionalActions}>
          <p>
            Already have an account?{" "}
            <button
              onClick={props.changeState.bind(this, 0)}
              className={classes.btn}
            >
              Sign in
            </button>
          </p>
        </div>
      }
      <div className={classes.bottomright} ref={container1}></div>
    </>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(SignUp);
