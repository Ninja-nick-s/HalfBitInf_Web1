import card from "./Card.module.css";
import axios from "axios";
import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import CustomModal from "../Modal/Modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteSubject } from "../../actions/subject";
import { getAllnote } from "../../actions/allnote";
import { deleteTopic, deleteTopics, getNote } from "../../actions/note";
import allnote from "../../reducers/allnote";
import Topic from "./Topic";
import Display from "../../mainPage/DisplayNote/DisplayNote";
let form;
let contentname;
let topicname;
const Card = (props) => {
  const subid = props.id;
  const [ImageURL, SetImageURL] = useState("");
  let it = 0;
  const [openModal, modalStateUpdater] = useState(-1);
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
  function delete_note(noteid) {
    props.deleteTopic(noteid);
    setTimeout(()=>{window.location.reload(false);},2000)
    
  }
  function shownote(content,topic) {
    console.log(content)
    contentname = content;
    topicname = topic;
    modalStateUpdater(0);
  }

  function injectinid(id, topic, noteid,content) {
    var allcontainer = document.createElement("div");
    var filecontainer = document.createElement("div");
    var fileoption = document.createElement("div");
    var deletecontainer = document.createElement("div");
    var sharecontainer = document.createElement("div");
    allcontainer.setAttribute("class", `${card.allCardCon}`);
    filecontainer.setAttribute("class", `${card.fileCardCon}`);
    fileoption.setAttribute("class", `${card.fileoptionCardCon}`);
    sharecontainer.setAttribute("class", `${card.shareCardCon}`);
    deletecontainer.setAttribute("class", `${card.deleteCardCon}`);
    var innercontent = `<button class=${card.files}>
    ${topic}
  </button>`;
  
    var innershare = `
    <button class="${card.fileoption} ${card.shareoption}" 
    ><i class="fas fa-trash-alt"></i>&nbsp; Share</button>`;

    var innerdelete = `
  <button class="${card.fileoption} ${card.deleteoption}" 
  ><i class="fas fa-trash-alt"></i>&nbsp; Delete</button>`;

    filecontainer.innerHTML = innercontent;
    sharecontainer.innerHTML = innershare;
    deletecontainer.innerHTML = innerdelete;
    fileoption.append(sharecontainer);
    fileoption.append(deletecontainer);
    deletecontainer.onclick = function () {
      delete_note(noteid);
    };
    filecontainer.onclick = function () {
      shownote(content,topic);
    };
    allcontainer.append(filecontainer);
    allcontainer.append(fileoption);
    document.getElementById(id).append(allcontainer);
  }
  useEffect(() => {
    props.getAllnote(subid);
  }, [props.getAllnote]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${props.title}&client_id=qdvH4yeGiC-wAUJOgaQ0dPdDvdXjRSIjWAO4yDsPD9Q`
      )
      .then((res) => SetImageURL(res.data.results[2].urls.full))
      .catch((err) => console.log(err));
    setTimeout(() => {
      props.allnote.allnotes.map((note) => {
        if (it === props.index) {
          console.log(note, " ", it, " ", props.index);
          note.notes.map((onesub) => {
            injectinid(props.index, onesub.topic, onesub._id,onesub.content);
          });
        }
        it = it + 1;
      });
    }, 1000);
  }, []);

  if (openModal === 0)
    form = (
      <Display
        onClose={modalStateUpdater.bind(this, -1)}
        changeState={modalStateUpdater}
        isOpen={openModal !== -1}
        noter={contentname}
        topic = {topicname}
      />
    );
  return (
    <>
      <CustomModal isOpen={openModal === 0} className={card.modal}>{form}</CustomModal>
      <div className={`${card.maincard}`} id={`maincardid ${props.index}`}>
        <div className={card.filescover} id={`filecoverid ${props.index}`}>
          <div className={card.top}>
            <button className={card.buttons} onClick={setInactive}>
              <i className="fas fa-times"></i>&nbsp; CLOSE
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
          <div className={card.bottom} id={`${props.index}`}></div>
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
                props.deleteTopics(subid);
                setTimeout(()=>{window.location.reload(false);},2000);
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
  note: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteSubject: PropTypes.func.isRequired,
  getAllnote: PropTypes.func.isRequired,
  deleteTopic: PropTypes.func.isRequired,
  deleteTopics: PropTypes.func.isRequired,
  getNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  allnote: state.allnote,
  note: state.note,
});

export default connect(mapStateToProps, {
  deleteSubject,
  getAllnote,
  deleteTopic,
  deleteTopics,
  getNote,
})(Card);
