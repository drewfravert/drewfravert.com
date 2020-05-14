/*
==========================================================================================
  Browser
==========================================================================================
*/

// application environments
const environment = {
  development: "development",
  test: "test",
  staging: "staging",
  production: "production"
};

// client operating system
const os = {
  android: !!navigator.userAgent.toLowerCase().match(/android/),
  ios: !!navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod/),
  linux: !!navigator.userAgent.toLowerCase().match(/linux/),
  mac: !!navigator.userAgent.toLowerCase().match(/mac/),
  windows: !!navigator.userAgent.toLowerCase().match(/windows/)
};

// events list
const events = {
  click: "click",
  change: "change",
  focusin: "focusin",
  focusout: "focusout",
  input: "input",
  keydown: "keydown",
  keyup: "keyup",
  submit: "submit",
  wheel: "wheel"
};

// event dispatchers
const dispatch = {};

Object.keys(events).forEach((event) => {
  dispatch[event] = new Event(event, { bubbles: true, cancelable: true });
});

// http methods
const request = {
  get: "get",
  post: "post",
  patch: "patch",
  delete: "delete"
};

const Browser = { environment, os, events, dispatch, request };

/*
==========================================================================================
  Exports
==========================================================================================
*/

export { environment, os, events, dispatch, request };

export default Browser;
