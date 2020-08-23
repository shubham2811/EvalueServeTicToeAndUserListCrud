import axios from 'axios';
import {LoaderActionConstants, ToastrActionConstants} from './actionConstants';
import store from '../store/store'
import { MESSAGES } from './utils';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST
});

const isHandlerEnabled = (config: any = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true;
};
const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    // Handle errors;
    store.dispatch({
      type:LoaderActionConstants.HIDE_LOADER
  })
  store.dispatch({
    type: ToastrActionConstants.SHOW_TOASTR,
    payload: {
      toastrMessage: MESSAGES.GENERIC_ERROR,
      toastrType: MESSAGES.ERROR,
    },
  
  });
  }
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
  store.dispatch({
    type:LoaderActionConstants.HIDE_LOADER
})
    // Handle responses
  }
  return response;
};
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
