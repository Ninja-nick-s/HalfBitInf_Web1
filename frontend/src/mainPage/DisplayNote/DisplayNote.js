import React, { useEffect, useState, useRef } from "react";
import mainpage from "./Display.module.css";
import Quill from "quill";
import Button from "../../UI/Button/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNote } from "../../actions/note";
let quill;
const Display = (props) => {
  useEffect(() => {
    quill = new Quill(".editor", {
      modules: {
        toolbar: [],
      },
      theme: "snow",
    });
    quill.setContents(props.noter);
  }, []);

  return (
    <div className={mainpage.cover}>
      <div className={mainpage.title}>NOTES</div>
      <button className={mainpage.buttons} onClick={props.onClose}>
        <i class="fas fa-times"></i>
      </button>
    </div>
  );
};

export default Display;
