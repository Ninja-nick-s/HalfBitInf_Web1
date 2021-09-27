import {
  GET_TOPICS,
  NOTES_ERROR,
  DELETE_TOPICS,
  DELETE_TOPIC,
  GET_NOTE,
  ADD_NOTE,
} from "../actions/types";

//initial state
const initialstate = {
  notes: [],
  note: null,
  loading: true,
  error: {},
};
//
export default function (state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TOPICS:
      return {
        ...state,
        notes: payload,
        loading: false,
      };
    case GET_NOTE:
      return {
        ...state,
        notes: payload,
        loading: false,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload],
        loading: false,
      };
    case DELETE_TOPICS:
      return {
        ...state,
        subjects: state.notes.filter((note) => note.subjectid !== payload),
        loading: false,
      };
    case DELETE_TOPIC:
      return {
        ...state,
        subjects: state.notes.filter((note) => note._id !== payload),
        loading: false,
      };
    case NOTES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
