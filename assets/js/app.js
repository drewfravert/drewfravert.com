// css
import "../css/app.css";

// js
import ColorScheme from "./component/ColorScheme.js";
import NProgress from "nprogress";

// phoenix
import "phoenix_html";
import { Socket } from "phoenix";
import { LiveSocket } from "phoenix_live_view";

// constants
const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
const liveSocket = new LiveSocket("/live", Socket, { params: { _csrf_token: csrfToken } });

// show progress bar on live navigation and form submits
window.addEventListener("phx:page-loading-start", info => NProgress.start());
window.addEventListener("phx:page-loading-stop", info => NProgress.done());

// connect if there are any LiveViews on the page
liveSocket.connect();

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug();
// >> liveSocket.enableLatencySim(1000);
window.liveSocket = liveSocket;

// initialize color scheme functionality
ColorScheme.initialize();
