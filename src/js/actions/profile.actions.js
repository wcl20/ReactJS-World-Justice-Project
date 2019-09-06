import { PROFILE_SUMMARY, PROFILE_DETAILS } from "../constants";
import { profileServices } from "../services/profile.services";

export function getSummary() {
    return function(dispatch) {
        dispatch({ type: `${PROFILE_SUMMARY}`, async: true, httpService: profileServices.getSummary, params: [] });
    }
}

export function getDetails() {
    return function(dispatch) {
        dispatch({ type: `${PROFILE_DETAILS}`, async: true, httpService: profileServices.getDetails, params: [] });
    }
}