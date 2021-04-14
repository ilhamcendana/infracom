import axios from "axios";
import { store } from 'store';

export const FETCH_HOME = async (component) => {
    const TOKEN = store.getState().reducerAuth.token;
    component.setState({ loading: true });
    const response = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_ENDPOINT_API}/home`,
        headers: {
            "Authorization": `${TOKEN}`
        }
    })
    component.setState({ loading: false });
    if(response.status === 200) {
        component.setState({data:response.data.data.works})
    }    
}