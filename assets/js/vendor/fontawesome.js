/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import { config, dom, library } from "@fortawesome/fontawesome-svg-core";
import { } from "@fortawesome/pro-light-svg-icons";
import { faArrowUp, faCookie, faCopy, faKeyboard, faKeySkeleton, faPalette, faRandom, faSearch, faTimes, faUndoAlt } from "@fortawesome/pro-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/pro-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const FontAwesome = {

  initialize() {

    addIconsToLibrary();
    configureAPI();

  },

  updateIcon(selector, icon) {

    selector.dataset.icon = icon;

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const addIconsToLibrary = () => {

  library.add(
    // light icons

    // regular icons
    faArrowUp,
    faCookie,
    faCopy,
    faKeyboard,
    faKeySkeleton,
    faTimes,
    faPalette,
    faRandom,
    faSearch,
    faUndoAlt,

    // solid icons
    faMapMarkerAlt,

    // duotone icons

    // brand icons
    faGithub,
    faLinkedin,
    faTwitter
  );

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
