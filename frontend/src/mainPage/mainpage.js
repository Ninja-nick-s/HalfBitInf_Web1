import React, { useEffect, useState, useRef } from "react";
import mainpage from "./mainpage.module.css";
import Lottie from "lottie-web";
import Navbar from "../UI/Navbar/Navbar";
import Card from "../UI/Card/Card";
import AddCard from "../UI/Card/AddCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CustomModal from "../UI/Modal/Modal";
import SubjectForm from "./foldername/foldername";
import Display from "./DisplayNote/DisplayNote";
import Shareform from "./Share/Share";
import Create from "./Create/create";
import { getSubjects } from "../actions/subject";
//
let topic_name;
let content_s;
let form;
const Main = (props) => {
  let it = 0;
  const [subjectid, setSubjectid] = useState(null);
  const [openModal, modalStateUpdater] = useState(-1);
  const container = useRef(null);

  function setSubjectidcard(subject_id) {
    setSubjectid(subject_id);
  }
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../General_Jsons/Mainpage_jsons/nodatajson.json"),
    });
  }, []);

  useEffect(() => {
    props.getSubjects();
  }, [props.getSubjects]);

  if (openModal === 0)
    form = (
      <SubjectForm
        onClose={modalStateUpdater.bind(this, -1)}
        changeState={modalStateUpdater}
        isOpen={openModal !== -1}
      />
    );
  if (openModal === 1)
    form = (
      <Create
        subjectid={subjectid}
        onClose={modalStateUpdater.bind(this, -1)}
        changeState={modalStateUpdater}
        isOpen={openModal !== -1}
      />
    );
  if (openModal === 2)
    form = (
      <Display
        onClose={modalStateUpdater.bind(this, -1)}
        changeState={modalStateUpdater}
        isOpen={openModal !== -1}
      />
    );
  if (openModal === 3)
    form = (
      <Shareform
        onClose={modalStateUpdater.bind(this, -1)}
        changeState={modalStateUpdater}
        isOpen={openModal !== -1}
        topic={topic_name}
        content={content_s}
      />
    );

  function onClickAddFolderButton() {
    modalStateUpdater(0);
  }
  function onClickAddFilesButton() {
    modalStateUpdater(1);
  }
  function onClickDisplayButton() {
    modalStateUpdater(2);
  }
  function onClickShareButton(topic_, content_) {
    topic_name = topic_;
    content_s = content_;
    modalStateUpdater(3);
  }
  return (
    <>
      <CustomModal isOpen={openModal === 0 || openModal === 3}>
        {form}
      </CustomModal>
      <CustomModal
        isOpen={openModal === 1 || openModal === 2}
        className={mainpage.modal}
      >
        {form}
      </CustomModal>
      <div className={mainpage.main}>
        <div className={mainpage.topright}> </div>
        <div className={mainpage.bottomleft}> </div>
        <div className={mainpage.navbar}>
          <Navbar
            currentActive={3}
            isLogin={
              props.isAuthenticated == null ? false : props.isAuthenticated
            }
          ></Navbar>
        </div>
        <div className={mainpage.cover}>
          <div className={mainpage.title}>
            <i className="fas fa-copy"></i>&nbsp; ALL FOLDER
          </div>
          <div className={mainpage.foldername}>
            {props.subject.subjects.map((subject) => (
              <Card
                index={(it = it + 1)}
                AddFiles={onClickAddFilesButton}
                AddFolder={onClickAddFolderButton}
                Display={onClickDisplayButton}
                setSubjectidcard={setSubjectidcard}
                onClickShareButton={onClickShareButton}
                title={subject.subname}
                desc={subject.description}
                id={subject._id}
              ></Card>
            ))}
            <AddCard AddClick={onClickAddFolderButton} />
          </div>
        </div>
      </div>
    </>
  );
};
Main.propTypes = {
  isAuthenticated: PropTypes.bool,
  getSubjects: PropTypes.func.isRequired,
  subject: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  subject: state.subject,
});
export default connect(mapStateToProps, { getSubjects })(Main);
