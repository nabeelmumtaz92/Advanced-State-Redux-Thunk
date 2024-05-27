// src/actions/index.js
export const fetchNationality = (name) => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_NATIONALITY_REQUEST' });
  
      try {
        const response = await fetch(`https://api.nationalize.io?name=${name}`);
        const data = await response.json();
        dispatch({ type: 'FETCH_NATIONALITY_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_NATIONALITY_FAILURE', payload: error.message });
      }
    };
  };
  