import {
  OTHER_API,
  OTHER_API_SUCCESS,
  OTHER_API_FAIL,
} from './types';

import axios from 'axios';

export const otherApi = (method, api, data, token, flag) => {
  return (dispatch) => {
    dispatch({ type: OTHER_API });
    axios({
      url: 'https://api.disneyapi.dev/' + api,
      method: method,
      data: method == 'POST' ? data : '',
      params: method == 'GET' ? data : '',
    })
      .then(function (res) {
        otherSuccess(dispatch, res.data.data, flag, token);
      })
      .catch(function (error) {
        if (error.response && error.response.status == 400) {
          otherFail(dispatch, error.response.data.message);
        } else if (error.response && error.response.status == 401) {
          otherFail(dispatch, 'Auth Fail');
        } else {
          const message = 'connectionError';
          otherFail(dispatch, message);
        }
      });
  };
};
export const otherFail = (dispatch, error) => {
  dispatch({
    type: OTHER_API_FAIL,
    payload: error,
  });
};
export const otherSuccess = (dispatch, data, api, token) => {
  const res = { data, api };
  dispatch({
    type: OTHER_API_SUCCESS,
    payload: res,
  });

};

