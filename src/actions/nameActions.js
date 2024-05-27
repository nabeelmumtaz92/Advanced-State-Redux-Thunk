// src/actions/nameActions.js
import axios from 'axios';

export const FETCH_NATIONALITY_REQUEST = 'FETCH_NATIONALITY_REQUEST';
export const FETCH_NATIONALITY_SUCCESS = 'FETCH_NATIONALITY_SUCCESS';
export const FETCH_NATIONALITY_FAILURE = 'FETCH_NATIONALITY_FAILURE';

export const fetchNationality = (name) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_NATIONALITY_REQUEST });
        try {
            const response = await axios.get(`https://api.nationalize.io?name=${name}`);
            dispatch({ type: FETCH_NATIONALITY_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_NATIONALITY_FAILURE, error });
        }
    };
};
