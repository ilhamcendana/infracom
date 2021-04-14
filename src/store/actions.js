import { SET_TOKEN } from "./actionTypes";

export const setToken = (payload) => {
    return function (dispatch) {
        dispatch({ type: SET_TOKEN, payload })
    }
}
