import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import classes from "./Alert.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = (props) =>
  props.alerts !== null &&
  props.alerts.length > 0 &&
  props.alerts.map((alert) => (
    <Modal isOpen={props.alerts !== null} className={classes.modal}>
      <div className={classes.alert} key={alert.id}>
        <h2>{alert.msg}</h2>
      </div>
    </Modal>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
