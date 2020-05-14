/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import { events } from "../global/browser.js";
import Selectors from "../global/selectors.js"

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const Utilities = {

  initialize() {

    initializeScrollTop();

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const initializeScrollTop = () => {

  const elements = Selectors.global.body.querySelectorAll(".js-scroll-top");

  bindScrollTop(elements);

};

const bindScrollTop = (elements) => {

  elements.forEach((element) => {

    element.addEventListener(events.click, (event) => {

      event.preventDefault();
      window.scroll({ top: 0, left: 0, behavior: "smooth" });

    });

  });

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Utilities;
