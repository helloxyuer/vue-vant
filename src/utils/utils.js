import config from "./config";

let trim = function trim(str, is_global) {
  var result;
  result = str.replace(/(^\s+)|(\s+$)/g, "");
  if (is_global.toLowerCase() == "g") {
    result = result.replace(/\s/g, "");
  }
  return result;
}

let storageSession = {
  set(key, val) {
    if (!key || !val) {
      console.log('缺少key或val')
      return
    }
    sessionStorage.setItem(key, val);
  },
  get(key) {
    if (!key) {
      console.log('缺少key或val')
      return
    }
    if (sessionStorage.getItem(key)) {
      return sessionStorage.getItem(key)
    }
  }
}

let storageLocal = {
  set(key, val) {
    if (!key || !val) {
      console.log('缺少key或val')
      return
    }
    localStorage.setItem(key, val);
  },
  get(key) {
    if (!key) {
      console.log('缺少key或val')
      return
    }
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key)
    }
  }
}

let regExp = {
  password: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/,
  idcard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  numAndWord: /^[0-9a-zA-Z]+$/,
  tel: /^[1][0-9]{10}$/,
}

const turnNumStringToStates = function (data = '', arrType) {
  let returnArr = [];
  data.split(',').forEach(function (index) {
    returnArr.push(config[arrType][index])
  })
  return returnArr.join(',');
}

const common = {
  trim,
  storageSession,
  storageLocal,
  regExp,
  turnNumStringToStates
};
export default common;

