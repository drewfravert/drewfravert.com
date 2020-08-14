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

  },

  scrollTop() {

    const scrollTopProperties = { top: c.number.zero, behavior: "smooth" };

    window.scroll(scrollTopProperties);

  },

  stopKeydownPropagationWhenInput() {

    const handler = [b.event.keydown, (event) => {

      const key = event.key;
      const keyIsEscape = key === c.key.escape;
      const escapeKeyHandler = () => document.activeElement.blur();

      const element = document.activeElement.tagName.toLowerCase();
      const inputElements = ["input", "textarea", "select"];
      const elementIsInput = inputElements.includes(element);
      const inputElementHandler = () => event.stopPropagation();

      keyIsEscape && escapeKeyHandler() || elementIsInput && inputElementHandler();

    }];

    document.addEventListener(...handler);

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

    isScrollTopButton && Utilities.scrollTop();

  }];

  s.body.addEventListener(...handler);

};

const bindScrollTopKeys = () => {

  const keys = ["T"];
  const handler = (event) => Utilities.scrollTop();

  Helpers.bindKeys(keys, handler);

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Utilities;
