import card from "./Card.module.css";
import axios from "axios";
import React, { useEffect, useState, Component } from "react";

const SingleTopic = (props) => {
  return (
    <>
      <button onClick={props.Display} className={card.files}>
        {props.topic}
      </button>
      <button className={card.filedelete}>Delete</button>
    </>
  );
};

export default SingleTopic;
