import React, { useEffect, useState, useRef } from "react";
import mainpage from "./Display.module.css";
import Button from "../../UI/Button/Button";
import Quill from "quill";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editNote } from "../../actions/note";

var quill;
const Display = (props) => {
  //console.log(props.noterid);
  var toolbarOptions = [
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ align: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    ["link", "image", "video", "formula", "code-block"],
    [{ color: [] }, { background: [] }],
  ];
  useEffect(() => {
    quill = new Quill(".editor", {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });

    quill.setContents(JSON.parse(props.noter).ops);
    console.log(JSON.parse(props.noter));
  }, []);
  function onSubmit(e) {
    e.preventDefault();
    let editcontent = JSON.stringify(quill.getContents());
    props.editNote(props.noterid, editcontent);
    setTimeout(() => {
      window.location.reload(false);
    }, 2000);
  }
  return (
    <div className={mainpage.cover}>
      <div className={mainpage.title}>{props.topic}</div>
      <button className={mainpage.buttons} onClick={props.onClose}>
        <i className="fas fa-times"></i>
      </button>
      <div className={mainpage.editorarea}>
        <div className={`${mainpage.area} ${"editor"}`}></div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={mainpage.buttoncover}>
            <Button className={mainpage.savebutton} type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

Display.propTypes = {
  editNote: PropTypes.func.isRequired,
};

export default connect(null, { editNote })(Display);
