/*
==========================================================================================
  Dependencies
==========================================================================================
*/

// html
import "phoenix_html";

// css
import "../css/app.css";

// js modules
import Cookies from "./module/cookies.js";
import Utilities from "./module/utilities.js";

// js components
import ColorScheme from "./component/colorscheme.js";
import Tabs from "./component/tabs.js";

// js vendors
import FontAwesome from "./vendor/fontawesome.js";

/*
==========================================================================================
  Initializers
==========================================================================================
*/

FontAwesome.initialize();
Cookies.initialize();
Utilities.initialize();
ColorScheme.initialize();
Tabs.initialize();
