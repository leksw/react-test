import { combineReducers } from "redux";
import article from "./articles";
import comments from "./comments";

export default combineReducers({ article,  comments });