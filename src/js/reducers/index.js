import { combineReducers } from "redux";

import { profileSummary, profileDetails } from "./profile.reducers";

const rootReducer = combineReducers({
    profileSummary,
    profileDetails
});
export default rootReducer;