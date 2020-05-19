/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import { config, dom, library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faMapMarkerAlt, faRandom, faSun, faUndoAlt } from "@fortawesome/pro-solid-svg-icons";
import { faGithub, faKeybase, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const FontAwesome = {

  initialize() {

    addIconsToLibrary();
    configureAPI();

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const addIconsToLibrary = () => {

  library.add(faArrowUp, faMapMarkerAlt, faRandom, faSun, faUndoAlt, faGithub, faKeybase, faLinkedin);

};

const configureAPI = () => {

  // config.autoA11y = true;
  // config.autoAddCss = true;
  config.autoReplaceSvg = true;
  config.familyPrefix = "icon";
  config.keepOriginalSource = false;
  // config.measurePerformance = false;
  config.observeMutations = true;
  // config.mutateApproach = "async";
  config.replacementClass = "svg-icon";
  // config.searchPseudoElements = false;
  // config.showMissingIcons = true;

  dom.watch();

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default FontAwesome;
