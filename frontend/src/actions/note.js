import axios from "axios";
import { setAlert } from "./alert";
import { getAllnote } from "./allnote";
import {
  GET_TOPICS,
  NOTES_ERROR,
  DELETE_TOPICS,
  DELETE_TOPIC,
  GET_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
} from "./types";
//
export const addNote = (subjectid, topic, content) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const formData = JSON.stringify({ topic, content });
  try {
    const res = await axios.post(`/api/note/${subjectid}`, formData, config);
    dispatch({
      type: ADD_NOTE,
      payload: res.data,
    });

    dispatch(setAlert("Note Added", "success"));
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getTopics = (subid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/note/${subid}`);
    dispatch({
      type: GET_TOPICS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const editNote = (id, content) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const formData = JSON.stringify({ content });
  try {
    await axios.patch(`/api/note/${id}`, formData, config);
    const res = await axios.get(`/api/note/single/${id}`);
    dispatch({
      type: EDIT_NOTE,
      payload: res.data,
    });
    dispatch(setAlert("SAVED CHANGES", "success"));
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getNote = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/note/single/${id}`);
    dispatch({
      type: GET_NOTE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteTopics = (subid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/note/${subid}`);
    await axios.delete(`/api/note/${subid}`);
    dispatch({
      type: DELETE_TOPICS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteTopic = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/note/single/${id}`);
    dispatch({
      type: DELETE_TOPIC,
      payload: id,
    });
    dispatch(setAlert("Note deleted", "success"));
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
