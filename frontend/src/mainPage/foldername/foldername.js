import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/Textarea/Textarea";
import classes from "./foldername.module.css";
import { useEffect, useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import Alert from "../../UI/Alert/Alert";
import Lottie from "lottie-web";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { addSubject } from "../../actions/subject";

const SubjectForm = (props) => {
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

  const [formData, setFormData] = useState({
    subname: "",
    description: "",
  });
  const { subname, description } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    props.addSubject(subname, description);
    props.onClose();
    setTimeout(() => {
      window.location.reload(false);
    }, 2000);
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
          name="subname"
          isValid={true}
          type="test"
          placeholder="Folder Name"
          value={subname}
          onChange={(e) => onChange(e)}
        />
        <TextArea
          name="description"
          type="test"
          isValid={true}
          placeholder="Folder Desc"
          value={description}
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

SubjectForm.propTypes = {
  addSubject: PropTypes.func.isRequired,
};

export default connect(null, { addSubject })(SubjectForm);
