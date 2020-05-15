/*
==========================================================================================
  Dependencies
==========================================================================================
*/

// html
import "phoenix_html";

// css
import "../css/app.css";

// js sockets
import LiveView from "./socket/live-view.js";

// js modules
import Utilities from "./module/utilities.js";

// js components
import ColorScheme from "./component/color-scheme.js";
// import Tabs from "./component/tabs.js";

// js vendors
import FontAwesomeSolids from "@fortawesome/fontawesome-pro/js/solid.js";
import FontAwesomeBrands from "@fortawesome/fontawesome-pro/js/brands.js";
import FontAwesome from "@fortawesome/fontawesome-pro/js/fontawesome.js";

/*
==========================================================================================
  Initializers
==========================================================================================
*/

// initialize live view
LiveView.initialize();

// initialize core utilities
Utilities.initialize();

// initialize color scheme functionality
ColorScheme.initialize();

// initialize tabs functionality
// Tabs.initialize();
