import {
  GET_ALL_NOTE,
  ALL_NOTES_ERROR,
  DELETE_TOPIC,
  DELETE_TOPICS,
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
    case DELETE_TOPIC:
      return {
        ...state,
      };
    case DELETE_TOPICS:
      return {
        ...state,
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
