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
  Initializers
==========================================================================================
*/

const App = {

  initialize() {

    FontAwesome.initialize();
    Appearance.initialize();
    Modals.initialize();
    Cookies.initialize();

    Utilities.initializeJS();
    Utilities.bindAutoSelect();
    Utilities.bindScrollTop();

  }

};

App.initialize();
