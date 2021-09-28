import React, { useEffect, useState, useRef } from "react";
import share from "./Share.module.css";
import Navbar from "../UI/Navbar/Navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSharednotes, deletesharednotes } from "../actions/snote";
import ShowSharedNotes from "./ShowSharedNotes/ShowSharedNotes";
import CustomModal from "../UI/Modal/Modal";

let form;
let topicData;
let contentData;
const Share = (props) => {
  const [openModal, modalStateUpdater] = useState(-1);
  useEffect(() => {
    props.getSharednotes();
  }, [props.getSharednotes]);
  function showsharedNote(topic, content) {
    console.log(topic, content);
    modalStateUpdater(0);
    topicData = topic;
    contentData = content;
  }
  function deletesnote(shnoteid) {
    props.deletesharednotes(shnoteid);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  if (openModal === 0)
    form = (
      <ShowSharedNotes
        onClose={modalStateUpdater.bind(this, -1)}
        changeState={modalStateUpdater}
        isOpen={openModal !== -1}
        topic={topicData}
        content={contentData}
      />
    );
  return (
    <>
      <CustomModal isOpen={openModal === 0} className={share.modal}>
        {form}
      </CustomModal>
      <div className={share.main}>
        <div className={share.topright}> </div>
        <div className={share.bottomleft}> </div>
        <div className={share.navbar}>
          <Navbar
            currentActive={4}
            isLogin={
              props.isAuthenticated == null ? false : props.isAuthenticated
            }
          ></Navbar>
        </div>
        <div className={share.cover}>
          <div className={share.title}>
            <i class="fas fa-share-alt"></i>&nbsp; ALL SHARED FILES
          </div>
          <div className={share.SharedFiles}>
            {props.snote.snotes.map((snote) => (
              <div className={share.SharedCover}>
                <div className={share.SharefromCover}>
                  <div className={share.ShareFrom}>From : {snote.recemail}</div>
                </div>
                <div className={share.TopicDeleteCover}>
                  <div className={share.TopicCover}>
                    <button
                      className={share.Topic}
                      onClick={() => showsharedNote(snote.topic, snote.content)}
                    >
                      {snote.topic}
                    </button>
                  </div>
                  <div className={share.DeleteCover}>
                    <button
                      className={share.Delete}
                      onClick={() => deletesnote(snote._id)}
                    >
                      <i className="fas fa-trash-alt"></i>&nbsp; Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
Share.propTypes = {
  isAuthenticated: PropTypes.bool,
  getSharednotes: PropTypes.func.isRequired,
  deletesharednotes: PropTypes.func.isRequired,
  snote: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  snote: state.snote,
});
export default connect(mapStateToProps, { getSharednotes, deletesharednotes })(
  Share
);
