import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initialState = {
    name: "",
    isAuth: false,
    isLoading: false,
    isError: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: action.payload,
            };
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true };
   
        default:
            return state;
    }
};