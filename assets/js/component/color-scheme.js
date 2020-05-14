/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import { events } from "../global/browser.js";
import { circle } from "../global/constants.js";
import Selectors from "../global/selectors.js";
import { random } from "lodash";

/*
==========================================================================================
  Selectors
==========================================================================================
*/

Selectors.schemeListener = Selectors.global.body.querySelector(".js-toggle-scheme");
Selectors.accentListener = Selectors.global.body.querySelector(".js-toggle-accent");
Selectors.randomListener = Selectors.global.body.querySelector(".js-random-scheme");
Selectors.resetListener = Selectors.global.body.querySelector(".js-reset-scheme");

/*
==========================================================================================
  Constants
==========================================================================================
*/

const LIGHT_SCHEME = "light";
const DARK_SCHEME = "dark";
const HUE_BASE_PROPERTY = "--hue-base";
const DEFAULT_ACCENT = getComputedStyle(Selectors.global.document).getPropertyValue(HUE_BASE_PROPERTY).trim();

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const ColorScheme = {

  initialize() {

    initializeScheme();
    initializeAccent();

    bindScheme();
    bindAccent();
    bindRandom();
    bindReset();

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

// initializers
const initializeScheme = () => {

  const scheme = getCurrentScheme() || getSystemScheme();

  updateScheme(scheme);
  setScheme(scheme);

}

const initializeAccent = () => {

  const accent = getCurrentAccent() || DEFAULT_ACCENT;

  updateAccent(accent);
  updateAccentInput(accent);
  setAccent(accent);

};

// binders
const bindScheme = () => {

  Selectors.schemeListener.addEventListener(events.click, (event) => {

    const scheme = getCurrentScheme() === LIGHT_SCHEME ? DARK_SCHEME : LIGHT_SCHEME;

    event.preventDefault();
    updateScheme(scheme);
    setScheme(scheme);

  });

};

const bindAccent = () => {

  Selectors.accentListener.addEventListener(events.input, (event) => {

    const accent = event.target.value;

    event.preventDefault();
    updateAccent(accent);
    setAccent(accent);

  });

};

const bindRandom = () => {

  Selectors.randomListener.addEventListener(events.click, () => {

    const accent = getRandomAccent();

    event.preventDefault();
    updateAccent(accent);
    updateAccentInput(accent);
    setAccent(accent);

  });

};

const bindReset = () => {

  Selectors.resetListener.addEventListener(events.click, () => {

    resetScheme();
    resetAccent();

  });

};

// getters
const getSystemScheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK_SCHEME : LIGHT_SCHEME;
const getRandomAccent = () => `${random(circle.degrees)}`;
const getCurrentScheme = () => localStorage.getItem("scheme");
const getCurrentAccent = () => localStorage.getItem("accent");

// setters
const setScheme = (scheme) => localStorage.setItem("scheme", scheme);
const setAccent = (accent) => localStorage.setItem("accent", accent);

// updaters
const updateScheme = (scheme) => {

  Selectors.global.html.classList.remove(getCurrentScheme());
  Selectors.global.html.classList.add(scheme);

};

const updateAccent = (accent) => Selectors.global.document.style.setProperty(HUE_BASE_PROPERTY, accent);
const updateAccentInput = (accent) => Selectors.accentListener.value = accent;

// resetters
const resetScheme = () => {

  updateScheme(getSystemScheme());
  setScheme(getSystemScheme());

};

const resetAccent = () => {

  updateAccent(DEFAULT_ACCENT);
  updateAccentInput(DEFAULT_ACCENT);
  setAccent(DEFAULT_ACCENT);

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default ColorScheme;
