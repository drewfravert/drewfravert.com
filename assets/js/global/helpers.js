/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import b from "./browser.js";
import c from "./constants.js";
import s from "./selectors.js";

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const Helpers = {

  bindKeys(keys, callback, target = window) {

    const handler = [b.event.keydown, (event) => {

      const key = event.key;
      const keyMatch = keys.includes(key);

      keyMatch && callback();

    }];

    target.addEventListener(...handler);

  },

  copyToClipboard(text, successHandler = Helpers.noop, errorHandler = Helpers.noop) {

    navigator.clipboard.writeText(text).then(successHandler, errorHandler);

  },

  noop() { }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Helpers;
