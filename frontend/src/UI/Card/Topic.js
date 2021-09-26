import card from "./Card.module.css";
import axios from "axios";
import React, { useEffect, useState, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTopics } from "../../actions/note";
import { getAllnote } from "../../actions/allnote";
import SingleTopic from "./SingleTopic";
import allnote from "../../reducers/allnote";

const Topic = (index, subid) => {
  //const subid = props.subjectid;
  //let it = 0;
  // useEffect(() => {
  //   props.getTopics(subid);
  // }, [props.getTopics]);
  //getAllnote(subid);
  console.log("ok", index, subid);
  // useEffect(() => {
  //   getAllnote(subid);
  // }, [getAllnote]);
  // props.getTopics(subid);
  //console.log(props.note.notes);

  // return (
  //   <>
  //     {props.allnote.allnotes.map((x) => {
  //       if (it === props.index) {
  //         console.log(x, " ", it, " ", props.index);
  //         //props.injectinid(props.index, "hello");
  //       }
  //       it = it + 1;
  //     })}
  //   </>
  // );
};

// Topic.propTypes = {
//   auth: PropTypes.object.isRequired,
//   //getTopics: PropTypes.func.isRequired,
//   //note: PropTypes.object.isRequired,
//   getAllnote: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   //note: state.note,
//   allnote: state.allnote,
// });

export default Topic;
