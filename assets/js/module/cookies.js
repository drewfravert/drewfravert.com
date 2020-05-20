/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import { events } from "../global/browser.js";
import Selectors from "../global/selectors.js";

/*
==========================================================================================
  Selectors
==========================================================================================
*/

Selectors.cookiePreferenceListeners = Selectors.global.body.querySelectorAll(".js-cookie-preferences");

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const Cookies = {

  initialize() {

    bindListeners();

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const bindListeners = () => {

  Selectors.cookiePreferenceListeners.forEach((listener) => {

    // listener.addEventListener(events.click, (event) => alert("Hello"));

  });

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Cookies;
