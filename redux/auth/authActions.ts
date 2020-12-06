import api from "../../utils/api";
import { toast } from "react-toastify";
import NProgress from "nprogress";

import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from "./authTypes";

export const register = (data) => async (dispatch) => {
  NProgress.start();
  const body = JSON.stringify(data);

  try {
    const res = await api.post("/auth/register", body);

    if (res.data && res.data.success) {
      NProgress.done();
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      toast.success("user reg success");
    }
  } catch (err) {
    NProgress.done();
    const errors = err.response.data.message;
    if (errors) {
      toast.error(errors);
    }
  }
};

export const login = (data) => async (dispatch) => {
  NProgress.start();
  const body = JSON.stringify(data);
  try {
    const res = await api.post("/auth/login", body);
    if (res && res.data.success) {
      NProgress.done();
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      toast.success("user login success");
    }
  } catch (err) {
    NProgress.done();
    const errors = err.response.data.message;
    if (errors) {
      toast.error(errors);
    }
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
