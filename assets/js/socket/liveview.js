/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import b from "../global/browser.js"
import c from "../global/constants.js"
import s from "../global/selectors.js"

import { Socket } from "phoenix";
import { LiveSocket } from "phoenix_live_view";
import NProgress from "nprogress";

/*
==========================================================================================
  Constants
==========================================================================================
*/

c.csrfToken = s.csrfToken.getAttribute("content");
c.liveViewEndpoint = "/live";
c.liveViewSocket = new LiveSocket(c.liveViewEndpoint, Socket, { params: { _csrf_token: c.csrfToken } });

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const LiveView = {

  initialize() {

    bindNProgress();

    // connect if there are any LiveViews on the page
    c.liveViewSocket.connect();

    // expose c.liveViewSocket on window for web console debug logs and latency simulation
    //   -> LiveView.enableDebug();
    //   -> LiveView.enableLatencySim(1000);
    window.LiveView = c.liveViewSocket;

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
