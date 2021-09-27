import axios from "axios";
import { setAlert } from "./alert";
import { GET_ALL_NOTE, ALL_NOTES_ERROR, GET_TOPICS } from "./types";

export const getAllnote = (subid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/note/${subid}`);
    dispatch({
      type: GET_ALL_NOTE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ALL_NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
//
