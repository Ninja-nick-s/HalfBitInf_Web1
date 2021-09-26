import {
  GET_ALL_NOTE,
  ALL_NOTES_ERROR,
  //   GET_TOPICS,
  //   NOTES_ERROR,
  //   DELETE_TOPICS,
  //   DELETE_TOPIC,
  //   GET_NOTE,
  //   ADD_NOTE,
} from "../actions/types";

//initial state
const initialstate = {
  allnotes: [
    {
      notes: [],
      note: null,
      loading: true,
      error: {},
    },
  ],
  error: {},
};

export default function (state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_NOTE:
      return {
        ...state,
        ...state.allnotes.push({ notes: payload }),
      };
    case ALL_NOTES_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
