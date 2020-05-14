/*
==========================================================================================
  Selectors
==========================================================================================
*/

// initialize selectors object
const Selectors = {
  global: {}
};

// alias global selector key
const global = Selectors.global;

// set global selectors
global.document = document.documentElement;
global.html = document.querySelector("html");
global.head = global.html.querySelector("head");
global.body = global.html.querySelector("body");

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Selectors;
