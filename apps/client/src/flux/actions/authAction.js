import {USER_LOADED, AUTH_ERROR} from "./../constants/userConstants";



import setAuthToken from "./../../utils/setAuthToken"
import axios from "axios";

// //////////// CHARGER L'UTILISATEUR  //////////
export const LoaderUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get("/auth")
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}