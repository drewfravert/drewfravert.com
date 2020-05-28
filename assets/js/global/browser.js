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
const event = {
  click: "click",
  change: "change",
  focus: "focus",
  focusin: "focusin",
  focusout: "focusout",
  input: "input",
  keydown: "keydown",
  keyup: "keyup",
  mousedown: "mousedown",
  mouseup: "mouseup",
  scroll: "scroll",
  submit: "submit",
  wheel: "wheel"
};

// event dispatchers
const dispatch = {};

Object.keys(event).forEach((e) => dispatch[e] = new Event(e, { bubbles: true, cancelable: true }));

// http methods
const request = {
  get: "get",
  post: "post",
  patch: "patch",
  delete: "delete"
};

const Browser = { environment, os, event, dispatch, request };

/*
==========================================================================================
  Exports
==========================================================================================
*/

export { environment, os, event, dispatch, request };

export default Browser;
