import { LOGIN_WITH_GOOGLE, LOG_IN, LOG_OUT } from "../types/auth";

const initializationState = {
    userId: localStorage.getItem('userId'),
}

const authReducer = (state = initializationState, action) => {
    switch (action.type) {
        case LOG_IN:
            const userId = action.data.id;
            // localStorage.setItem(`userId`, action.data.id)
            localStorage.setItem(`userId`, 1);
            return {
                ...state,
                userId, userId
            }
            // return {
            //     ...state,
            //     userId: action.data.id
            // }
        case LOG_OUT:
            localStorage.removeItem(`userId`);
            return {
                ...state,
                userId: null
            }
        case LOGIN_WITH_GOOGLE: {
            return {
                ...state,
                userId: 1
            }
        }
        default:
            return {
                ...state,
            }
    }
}

export default authReducer;