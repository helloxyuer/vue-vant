"use strict";

import Vue from 'vue';
import axios from "axios";
import config from "../utils/config"
import utils from "../utils/utils"
import Qs from 'qs';
import { Toast } from 'vant';

let axiosBack = {
  sucSend(head) {
    return head;
  },
  errSend(err) {
    return Promise.reject(err);
  },
  sucBack(res) {
    if (res.status == '200') {
      return res.data;
    } else {
      Toast.fail({
        message: res.data.msg,
        type: 'error'
      });
    }
  },
  errBack(err) {
    Toast.fail({
      message: '网络不稳定,请检查网络',
      type: 'error'
    });
    return Promise.reject(err);
  },
}


const axios_Xform = function () {
  const header_Xform = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'ClientType': 'Platfrom',
    'ClientSystem': 'Platfrom',
    'Equipment': 'Platfrom',
    'baseuserid': utils.storageLocal.get('ry-baseUserId'),
    'platFormId': utils.storageLocal.get('ry-platFormId'),
  };
  const axios_Xform = axios.create({
    baseURL: config.baseUrl,
    timeout: 60 * 1000,
    withCredentials: true,
    headers: header_Xform,
    transformRequest: [
      function (data) {
        data = Qs.stringify(data);
        return data;
      }
    ]
  });
  axios_Xform.interceptors.request.use(axiosBack.sucSend, axiosBack.errSend);
  axios_Xform.interceptors.response.use(axiosBack.sucBack, axiosBack.errBack);
  return axios_Xform;
}

const axios_Json = function () {
  const header_Json = {
    'Content-Type': 'application/json',
    'ClientType': 'Platfrom',
    'ClientSystem': 'Platfrom',
    'Equipment': 'Platfrom',
    'baseuserid': utils.storageLocal.get('ry-baseUserId'),
    'platFormId': utils.storageLocal.get('ry-platFormId'),
  };
  const axios_Json = axios.create({
    baseURL: config.baseUrl,
    timeout: 60 * 1000,
    withCredentials: true,
    headers: header_Json,
  });
  axios_Json.interceptors.request.use(axiosBack.sucSend, axiosBack.errSend);
  axios_Json.interceptors.response.use(axiosBack.sucBack, axiosBack.errBack);
  return axios_Json;
}

Plugin.install = function (Vue) {
  Vue.axios = axios_Xform;
  window.axios = axios_Xform;
  Vue.axios = axios_Json;
  window.axios = axios_Json;
  Object.defineProperties(Vue.prototype, {
    axios_Xform: {
      get() {
        return axios_Xform;
      }
    },
    axios_Json: {
      get() {
        return axios_Json;
      }
    },
  });
};

Vue.use(Plugin)
