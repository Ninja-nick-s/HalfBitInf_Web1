import {
  ADD_SHARED_NOTE,
  DELETE_SHARED_NOTE,
  SHARED_NOTES_ERROR,
  GET_SHARED_NOTES,
} from "../actions/types";

//initial state
const initialstate = {
  snotes: [],
  snote: null,
  loading: true,
  error: {},
};

export default function (state = initialstate, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SHARED_NOTES:
      return {
        ...state,
        snotes: payload,
        loading: false,
      };

    case DELETE_SHARED_NOTE:
      return {
        ...state,
        subjects: state.snotes.filter((snote) => snote._id !== payload),
        loading: false,
      };
    case SHARED_NOTES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
