/*
==========================================================================================
  Selectors
==========================================================================================
*/

const Selectors = {};

// global selectors
Selectors.document = document.documentElement;
Selectors.html = document.querySelector("html");

// head selectors
Selectors.head = Selectors.html.querySelector("head");
Selectors.title = Selectors.head.querySelector("title");
Selectors.description = Selectors.head.querySelector("meta[name='description']");
Selectors.csrfToken = Selectors.head.querySelector("meta[name='csrf-token']");
Selectors.themeColor = Selectors.head.querySelector("meta[name='theme-color']");

// body selectors
Selectors.body = Selectors.html.querySelector("body");
Selectors.header = Selectors.body.querySelector(".header");
Selectors.main = Selectors.body.querySelector(".main");
Selectors.footer = Selectors.body.querySelector(".footer");
Selectors.sidebar = Selectors.body.querySelector(".sidebar");
Selectors.top = Selectors.body.querySelector(".top");

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Selectors;
