import axios from "axios";
import { setAlert } from "./alert";
import {
  ADD_SHARED_NOTE,
  DELETE_SHARED_NOTE,
  SHARED_NOTES_ERROR,
  GET_SHARED_NOTES,
} from "./types";

export const getSharednotes = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/share");
    dispatch({
      type: GET_SHARED_NOTES,
      payload: res.data,
    });
    if (res.data.length === 0) {
      dispatch(setAlert("Oops !! Your Shared folder is Empty", "success"));
    }
  } catch (err) {
    dispatch({
      type: SHARED_NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deletesharednotes = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/share/${id}`);
    dispatch({
      type: DELETE_SHARED_NOTE,
      payload: id,
    });

    dispatch(setAlert("recieved note deleted", "success"));
  } catch (err) {
    dispatch({
      type: SHARED_NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addSharednote = (content, topic, email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const formData = JSON.stringify({ topic, content, email });
  try {
    const res = await axios.post("/api/share/", formData, config);

    dispatch(setAlert("shared Note succesfully", "success"));
  } catch (err) {
    dispatch({
      type: SHARED_NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
