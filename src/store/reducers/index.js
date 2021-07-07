import { combineReducers } from "redux";
import chat from './chat';
import watson from './whatson';

const rootReducer = combineReducers({
    chat,
    watson
})

export default rootReducer;