import { LOG_IN, LOG_OUT } from "../types/auth";

const initializationState = {
    userId: localStorage.getItem('userId'),
}

const authReducer = (state = initializationState, action) => {
    switch (action.type) {
        case LOG_IN:
            localStorage.setItem(`userId`, action.data.id)
            return {
                ...state,
                userId: action.data.id
            }
        case LOG_OUT:
            localStorage.removeItem(`userId`);
            return {
                ...state,
                userId: null
            }
        default:
            return {
                ...state,
            }
    }
}

export default authReducer;