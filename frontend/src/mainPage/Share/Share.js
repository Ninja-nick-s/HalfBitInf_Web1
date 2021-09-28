import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./Share.module.css";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSharednote } from "../../actions/snote";
let timer = null;
const Shareform = (props) => {
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

  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    props.addSharednote(props.content, props.topic, email);
    props.onClose();
  };

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
          name="email"
          type="email"
          placeholder="Enter email to share with"
          isValid={true}
          onChange={(e) => onChange(e)}
          value={email}
        />
        <div className={classes.formActions}>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit">
            <i className="fas fa-share-alt"></i>&nbsp; Share
          </Button>
        </div>
      </form>

      <div className={classes.bottomleft} ref={container1}></div>
    </>
  );
};

Shareform.propTypes = {
  addSharednote: PropTypes.func.isRequired,
  snote: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  snote: state.snote,
});
export default connect(mapStateToProps, { addSharednote })(Shareform);
