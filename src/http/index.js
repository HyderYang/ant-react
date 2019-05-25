import JsonP from 'jsonp'
import Axios from "axios";
import {Modal} from "antd";

export default class Http {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url,
        {
          param: 'callback',
        },
        function (error, response) {
          if (response.status === 'success') {
            resolve(response);
          } else {
            reject(response.message);
          }
        });
    });
  }

  static ajax(options) {
    let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
    return new Promise((resolve, reject) => {
      Axios({
        url: baseApi + options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if (response.status == '200') {
          let res = response.data;
          if (res.code == '0') {
            resolve(res);
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
            reject(response.data);
        }
      })
    });
  }
}