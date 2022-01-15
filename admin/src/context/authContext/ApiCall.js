import axios from "axios";
import { loginStart, loginSuccess, loginFailure, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
      const res = await axios.post("http://localhost:8000/api/auth/login", user);
      dispatch(loginSuccess(res.data));
  } catch (error) {
      dispatch(loginFailure());
  }
};

export const logout = (dispatch) => { //TODO: implement the logout buttom
  dispatch(logout());
};
