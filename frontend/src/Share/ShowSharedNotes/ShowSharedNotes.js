import React, { useEffect, useState, useRef } from "react";
import showshared from "./ShowSharedNotes.module.css";
import Button from "../../UI/Button/Button";
import Quill from "quill";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editNote } from "../../actions/note";

var quill;
const ShowSharedNotes = (props) => {
  useEffect(() => {
    quill = new Quill(".editor", {
      modules: {
        toolbar: [],
      },
      theme: "snow",
    });

    quill.setContents(JSON.parse(props.content).ops);
    quill.disable();
  }, []);
  return (
    <div className={showshared.cover}>
      <div className={showshared.title}>{props.topic}</div>
      <button className={showshared.buttons} onClick={props.onClose}>
        <i className="fas fa-times"></i>
      </button>
      <div className={showshared.editorarea}>
        <div className={`${showshared.area} ${"editor"}`}></div>
      </div>
    </div>
  );
};

ShowSharedNotes.propTypes = {
  editNote: PropTypes.func.isRequired,
};

export default connect(null, { editNote })(ShowSharedNotes);
