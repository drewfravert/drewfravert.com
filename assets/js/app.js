/*
==========================================================================================
  Dependencies
==========================================================================================
*/

// html
import "phoenix_html";

// css
import "../css/app.css";

// js models
import b from "./global/browser.js";
import c from "./global/constants.js";
import s from "./global/selectors.js";
import Utilities from "./global/utilities.js";

// js modules
import Cookies from "./module/cookies.js";
import Appearance from "./module/appearance.js";

// js components
import Modals from "./component/modals.js";

// js vendors
import FontAwesome from "./vendor/fontawesome.js";

/*
==========================================================================================
  Application
==========================================================================================
*/

const App = {

  initialize() {

    Utilities.initializeJS();
    Utilities.bindAutoSelect();
    Utilities.bindScrollTop();
    Utilities.stopKeydownPropagationWhenInput();

    FontAwesome.initialize();
    Appearance.initialize();
    Modals.initialize();
    Cookies.initialize();

  }

};

App.initialize();
