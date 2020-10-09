import { terminalAPI } from "../api/api"

const inintialState = {
    initialized: false,
}

const app = (state = inintialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

// types
const SET_INITIALIZED = "SET_INITIALIZED";

// actionCreators
const setInitialized = () => {
    return{
        type: SET_INITIALIZED
    }
}

// async
export const initializeApp = () => async (dispatch) => {

}

export default app;