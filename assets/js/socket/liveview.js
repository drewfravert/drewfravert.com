/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import Selectors from "../global/selectors.js"
import { Socket } from "phoenix";
import { LiveSocket } from "phoenix_live_view";
import NProgress from "nprogress";

/*
==========================================================================================
  Selectors
==========================================================================================
*/

Selectors.csrfToken = Selectors.global.head.querySelector("meta[name='csrf-token']");

/*
==========================================================================================
  Constants
==========================================================================================
*/

const CSRF_TOKEN = Selectors.csrfToken.getAttribute("content");
const LIVE_VIEW_ENDPOINT = "/live";
const LIVE_VIEW_SOCKET = new LiveSocket(LIVE_VIEW_ENDPOINT, Socket, { params: { _csrf_token: CSRF_TOKEN } });

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const LiveView = {

  initialize() {

    bindNProgress();

    // connect if there are any LiveViews on the page
    LIVE_VIEW_SOCKET.connect();

    // expose LIVE_VIEW_SOCKET on window for web console debug logs and latency simulation
    //   -> LiveView.enableDebug();
    //   -> LiveView.enableLatencySim(1000);
    window.LiveView = LIVE_VIEW_SOCKET;

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const bindNProgress = () => {

  // show progress bar on live navigation and form submits
  window.addEventListener("phx:page-loading-start", info => NProgress.start());
  window.addEventListener("phx:page-loading-stop", info => NProgress.done());

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default LiveView;
