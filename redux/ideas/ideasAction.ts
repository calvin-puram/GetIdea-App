import { toast } from "react-toastify";
import NProgress from "nprogress";
import api from '../../utils/api';

import {
  GET_IDEAS,
} from "./ideasTypes";

export const getIdeas = () => async (dispatch:any) => {
  NProgress.start();
  try {
    const res = await api.get("/ideas");
  
    if (res.data && res.data.success) {
      NProgress.done();
      dispatch({
        type: GET_IDEAS,
        payload: res.data.data,
      });
    }
  } catch (err) {
    NProgress.done();
    const errors = err.response.data.msg;
    if (errors) {
      toast.error(errors);
    }
  }
};

// export const createProduct = (data) => async (dispatch) => {
//   NProgress.start();
//   try {
//     const res = await api.post("/products", data, {
//       headers: {
//         "content-type": "application/x-www-form-urlencoded",
//       },
//     });
//     if (res && res.data.success) {
//       NProgress.done();
//       dispatch({
//         type: ADD_PRODUCT,
//         payload: res.data.data,
//       });
//     }
//   } catch (err) {
//     NProgress.done();
//     const errors = err.response.data.message;
//     if (errors) {
//       toast.error(errors);
//     }
//   }
// };

// export const deleteProduct = (id) => async (dispatch) => {
//   NProgress.start();
//   try {
//     const res = await api.delete(`/product/${id}`);
//     if (res && res.data.success) {
//       NProgress.done();
//       dispatch({
//         type: DELETE_PRODUCT,
//       });
//       toast.info("product deleted successfully!!");
//     }
//   } catch (err) {
//     NProgress.done();
//     const errors = err.response.data.message;
//     if (errors) {
//       toast.error(errors);
//     }
//   }
// };

// export const updateProduct = (data, id) => async (dispatch) => {
//   NProgress.start();
//   try {
//     const res = await api.patch(`/product/${id}`, data);
//     if (res && res.data.success) {
//       NProgress.done();
//       dispatch({
//         type: UPDATE_PRODUCT,
//         payload: res.data.data,
//       });
//       toast.info("product updated successfully!!");
//     }
//   } catch (err) {
//     NProgress.done();
//     const errors = err.response.data.message;
//     if (errors) {
//       toast.error(errors);
//     }
//   }
// };
