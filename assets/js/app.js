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
import LiveView from "./socket/LiveView.js";

// js modules
import Utilities from "./module/Utilities.js";

// js components
import ColorScheme from "./component/ColorScheme.js";
import Tabs from "./component/Tabs.js";

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
Tabs.initialize();
