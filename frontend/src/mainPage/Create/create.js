import React, { useEffect, useState, useRef } from "react";
import mainpage from "./create.module.css";
import Quill from "quill";
import Button from "../../UI/Button/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNote } from "../../actions/note";

const Create = (props) => {
  const subid = props.subjectid;
  console.log(subid);
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
    var quill = new Quill(".editor", {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });
  }, []);
  const [formData, setFormData] = useState({
    topic: "",
    content: "dsaf",
  });
  const { topic, content } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    //content = "hello";
    props.addNote(subid, topic, content);
    console.log(subid, topic, content);
    props.onClose();
    //window.location.reload(false);
    console.log("submit");
  };

  return (
    <div className={mainpage.cover}>
      <div className={mainpage.title}>
        NOTE KEEPER <span>&nbsp;TEXT&nbsp; </span> EDITOR
      </div>
      <div className={mainpage.name}>
        <div className={mainpage.namecover}>HEADING</div>
      </div>
      <div className={mainpage.headcover}>
        <input
          name="topic"
          className={mainpage.toolbar}
          placeholder="Enter your topic name"
          value={topic}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className={mainpage.name}>
        <div className={mainpage.namecover}>NOTE</div>
      </div>
      <div className={mainpage.editorarea}>
        <div className={`${mainpage.area} ${"editor"}`}></div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={mainpage.buttoncover}>
            <Button className={mainpage.savebutton} type="submit">
              Save
            </Button>
            <Button className={mainpage.cancelbutton} onClick={props.onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default connect(null, { addNote })(Create);
