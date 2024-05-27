// src/reducers/nationalityReducer.js
const initialState = {
    loading: false,
    error: null,
    data: null,
  };
  
  const nationalityReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_NATIONALITY_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_NATIONALITY_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_NATIONALITY_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default nationalityReducer;
  