import axios from 'axios';
import {
    LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,
    REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAILURE,
    LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAILURE,
    CLEAR_ERRORS
    } from '../../constants/userConstants';

  // Register user 

  export const register =(userData) => async (dispatch) => {
    try {

        dispatch({type: REGISTER_USER_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const {data} = await axios.post('http://localhost:5000/auth/signup',userData, config)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })

    } catch(error){
        dispatch({
            type: REGISTER_USER_FAILURE,
            payload: error.response.data.message
        })
    }

}



  //Login
  export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({type: LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('http://localhost:5000/auth/login',{ email, password}, config);

       


        dispatch({
            type: LOGIN_SUCCESS,
            payload: { token: res.data.token, user: res.data.user },
        });

          // Save token and user data to localStorage
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.user));

    } catch(error){
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Load user
export const loadUser =() => async (dispatch) => {
    try {

        dispatch({type: LOAD_USER_REQUEST})

     
        const {data} = await axios.get('http://localhost:5000/auth/profile')

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })

    } catch(error){
        dispatch({
            type: LOAD_USER_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Clear errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}
  
export const logout = () => (dispatch) => {
    // Clear localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };
  
  