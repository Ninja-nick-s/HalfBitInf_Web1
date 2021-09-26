import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import subject from "./subject";
import note from "./note";
import allnote from "./allnote";
export default combineReducers({ alert, auth, subject, note, allnote });
