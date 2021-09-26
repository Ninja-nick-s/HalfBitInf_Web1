import card from "./Card.module.css";
import axios from "axios";
import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteSubject } from "../../actions/subject";
import Topic from "./Topic";

const Card = (props) => {
  const subid = props.id;
  const [ImageURL, SetImageURL] = useState("");

  function setActive() {
    document.getElementById(`coverid ${props.index}`).style.display = "none";
    document.getElementById(`maincardid ${props.index}`).style.transform =
      "rotateY(180deg)";
    document.getElementById(`filecoverid ${props.index}`).style.display =
      "flex";
    document.getElementById(`filecoverid ${props.index}`).style.width = "100%";
    document.getElementById(`filecoverid ${props.index}`).style.height = "100%";
  }
  function setInactive() {
    document.getElementById(`coverid ${props.index}`).style.display = "block";
    document.getElementById(`maincardid ${props.index}`).style.transform =
      "rotateY(0deg)";
    document.getElementById(`filecoverid ${props.index}`).style.display =
      "none";
    document.getElementById(`filecoverid ${props.index}`).style.width = "0%";
    document.getElementById(`filecoverid ${props.index}`).style.height = "0%";
  }
  function forCreate() {
    props.AddFiles();
    props.setSubjectidcard(subid);
  }
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${props.title}&client_id=qdvH4yeGiC-wAUJOgaQ0dPdDvdXjRSIjWAO4yDsPD9Q`
      )
      .then((res) => SetImageURL(res.data.results[2].urls.full))
      .catch((err) => console.log(err));
  }, []);

  function injectinid(id, topic) {
    var filecontainer = document.createElement("div");
    var innercontent = `<button onClick=${props.Display} className=${card.files}>
    ${topic}
  </button>
  <button className=${card.filedelete}>Delete</button>`;
    filecontainer.innerHTML = innercontent;
    document.getElementById(id).append(filecontainer);
    console.log(filecontainer, id);
  }

  return (
    <>
      <div className={`${card.maincard}`} id={`maincardid ${props.index}`}>
        <div className={card.filescover} id={`filecoverid ${props.index}`}>
          <div className={card.top}>
            <button className={card.buttons} onClick={setInactive}>
              <i class="fas fa-times"></i>&nbsp; CLOSE
            </button>
            <button
              className={card.buttons}
              onClick={forCreate}
              subjectid={subid}
            >
              {/* <h6>{subid}</h6> */}
              <i className="fas fa-plus-circle"></i>&nbsp; CREATE
            </button>
          </div>
          <div className={card.bottom} id={`${props.index}`}>
            <Topic
              onClick={props.Display}
              className={card.files}
              subjectid={subid}
              index={props.index}
              injectinid={injectinid}
            ></Topic>
          </div>
        </div>
        <div className={card.cover} id={`coverid ${props.index}`}>
          <div className={card.cont}>
            <div className={card.imagecont}>
              <img className={card.image} src={ImageURL} />
            </div>
            <div className={card.gap}></div>
            <div className={card.title}>{props.title}</div>
            <div className={card.gap}></div>
            <div className={card.desc}>{props.desc}</div>
            <div className={card.gap}></div>
          </div>
          <div className={card.option} style={{ background: props.col }}>
            <button className={card.buttons} onClick={setActive}>
              <i className="fas fa-folder-open"></i>&nbsp; OPEN
            </button>
            <button
              onClick={() => {
                props.deleteSubject(subid);
              }}
              type="button"
              className={card.buttons}
            >
              <i className="fas fa-trash-alt"></i>&nbsp; DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
Card.propTypes = {
  subject: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteSubject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteSubject })(Card);
