import {
  GET_SUBJECTS,
  SUBJECT_ERROR,
  DELETE_SUBJECT,
  ADD_SUBJECT,
} from "../actions/types";

const initialstate = {
  subjects: [],
  subject: null,
  loading: true,
  error: {},
};

export default function (state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUBJECTS:
      return {
        ...state,
        subjects: payload,
        loading: false,
      };
    case ADD_SUBJECT:
      return {
        ...state,
        subjects: [...state.subjects, payload],
        loading: false,
      };
    case DELETE_SUBJECT:
      return {
        ...state,
        subjects: state.subjects.filter((subject) => subject._id !== payload),
        loading: false,
      };
    case SUBJECT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
