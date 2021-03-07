import { useHistory, useLocation } from "react-router";
import { ROUTING } from "../../types/routing";
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// const redirect = (action) => {
//     if (action.type === ROUTING) {
//         const history = useHistory();
//         history.push('/news');
//     }
// }

export const redirect = store => next => action => { //eslint-disable-line no-unused-vars
    const history = syncHistoryWithStore(browserHistory, store);
    
    if (action.type === ROUTING) {
        console.log('routing')
        // const location = useLocation();
        // history.push('/google.com');
        // validation errorzz
        // browserHistory[action.payload.method](action.payload.nextUrl)
    }
    return next(action)
}

export default redirect;