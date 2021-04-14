import { store } from 'store';

export const checkAuth = () => {
    const token = store.getState().reducerAuth.token;    
    if (token) return true;
    return false;
}

export const LOG_OUT = () => {
    store.dispatch(dispatch => dispatch({type:'REMOVE_TOKEN'}));
    localStorage.clear();
    window.location = '/';
}