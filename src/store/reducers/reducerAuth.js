import { SET_TOKEN } from "store/actionTypes";

const initialState = {
    token: null
};

const reducerAuth = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_TOKEN:
            return {
                ...state,
                token: payload
            }
        case 'REMOVE_TOKEN':
            return {
                ...state,
                token:null
            }
        default:
            return state
    }
};

export default reducerAuth;

