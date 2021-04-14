import axios from 'axios';
import { setToken } from 'store/actions';

//global utils
import { store } from '../../store';

export const LOGIN = async (component, username, password) => {
    component.setState({ loading: true });
    const { data } = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_ENDPOINT_API}/login`,
        data: {
            username,
            password
        }
    })
    component.setState({ loading: false });
    if (data.success) {
        store.dispatch(setToken(data.token));
        window.location.reload();
    } else {
        alert(data.message);
    }
}