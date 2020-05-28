/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import b from "../global/browser.js";
import c from "../global/constants.js";
import s from "../global/selectors.js";

import Helpers from "./helpers.js";

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const Utilities = {

  initializeJS() {

    s.html.classList.remove("no-js");

  },

  bindAutoSelect() {

    const inputs = s.body.querySelectorAll(".autoselect");
    const mouseUpHandler = [b.event.mouseup, (event) => event.preventDefault()];
    const focusHandler = [b.event.focus, (event) => event.target.select()];

    inputs.forEach((input) => {

      input.addEventListener(...mouseUpHandler);
      input.addEventListener(...focusHandler);

    });

  },

  bindScrollTop() {

    bindScrollTopButtons();
    bindScrollTopKeys();

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const bindScrollTopButtons = () => {

  const handler = [b.event.click, (event) => {

    const scrollTopSelector = ".js-scroll-top";
    const isScrollTopButton = event.target.matches(scrollTopSelector);

    isScrollTopButton && scrollTop();

  }];

  s.body.addEventListener(...handler);

};

const bindScrollTopKeys = () => {

  const keys = ["T"];
  const handler = (event) => scrollTop();

  Helpers.bindKeys(keys, handler);

};

const scrollTop = () => {

  const scrollTopProperties = { top: c.number.zero, behavior: "smooth" };

  window.scroll(scrollTopProperties);

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Utilities;
