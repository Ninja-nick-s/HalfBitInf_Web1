import axios from "axios";
//import subject from "../reducers/subject";
import { setAlert } from "./alert";
import {
  DELETE_SUBJECT,
  GET_SUBJECTS,
  SUBJECT_ERROR,
  ADD_SUBJECT,
} from "./types";

export const getSubjects = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/subject");
    dispatch({
      type: GET_SUBJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SUBJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteSubject = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/subject/${id}`);
    dispatch({
      type: DELETE_SUBJECT,
      payload: id,
    });

    dispatch(setAlert("Subject deleted", "success"));
  } catch (err) {
    dispatch({
      type: SUBJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addSubject = (subname, description) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const formData = JSON.stringify({ subname, description });
  try {
    const res = await axios.post("/api/subject/", formData, config);
    dispatch({
      type: ADD_SUBJECT,
      payload: res.data,
    });

    dispatch(setAlert("Subject Added", "success"));
  } catch (err) {
    dispatch({
      type: SUBJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
