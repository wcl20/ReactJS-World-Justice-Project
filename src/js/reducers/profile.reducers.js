import { PROFILE_SUMMARY, PROFILE_DETAILS } from "../constants";
import { generateRequestActionType, generateSuccessActionType, generateFailureActionType } from "../middlewares";

export function profileSummary(state = { data: {}, isLoading: false }, action) {
    switch(action.type) {
        case generateRequestActionType(PROFILE_SUMMARY):
            return Object.assign({}, state, { isLoading: true });
        case generateSuccessActionType(PROFILE_SUMMARY):
            return Object.assign({}, state, { isLoading: false, data: action.payload });
        case generateFailureActionType(PROFILE_SUMMARY):
            return Object.assign({}, state, { isLoading: false, error: action.error });
        default:
            return state;
    }
}

export function profileDetails(state = { data: [], isLoading: false }, action) {
    switch(action.type) {
        case generateRequestActionType(PROFILE_DETAILS):
            return Object.assign({}, state, { isLoading: true, data: [] });
        case generateSuccessActionType(PROFILE_DETAILS):
            return Object.assign({}, state, { isLoading: false, data: action.payload });
        case generateFailureActionType(PROFILE_DETAILS):
            return Object.assign({}, state, { isLoading: false, error: action.error });
        default:
            return state;
    }
}