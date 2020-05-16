/*
==========================================================================================
  Dependencies
==========================================================================================
*/

// html
import "phoenix_html";

// css
import "../css/app.css";

// js vendors
import FontAwesome from "./vendor/fontawesome.js";

// js modules
import Utilities from "./module/utilities.js";

// js components
import ColorScheme from "./component/colorscheme.js";
import Tabs from "./component/tabs.js";

// js sockets
import LiveView from "./socket/liveview.js";

/*
==========================================================================================
  Initializers
==========================================================================================
*/

// initialize fontawesome icons
FontAwesome.initialize();

// initialize core utilities
Utilities.initialize();

// initialize color scheme functionality
ColorScheme.initialize();

// initialize tabs functionality
Tabs.initialize();

// initialize live view
LiveView.initialize();
