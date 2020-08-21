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
axiosInstance.interceptors.request.use((request) => requestHandler(request));
const requestHandler = (request) => {

  if (isHandlerEnabled(request)) {
    // Modify request here
    request.headers['AuthenticationToken'] = localStorage.getItem('authToken');
    store.dispatch({
      type:LoaderActionConstants.SHOW_LOADER
  })
  }
  return request;
};

const errorHandler = (error) => {
  console.log(error)
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
