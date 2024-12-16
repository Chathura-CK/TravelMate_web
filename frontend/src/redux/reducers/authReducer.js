// redux/reducers/authReducer.js

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, error: null };

    case 'LOGIN_FAILURE':
      return { ...state, user: null, error: action.payload };

    case 'LOGOUT':
      localStorage.removeItem('user');
      return { ...state, user: null, error: null };

    default:
      return state;
  }
};

export default authReducer;
