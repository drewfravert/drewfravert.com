/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import _ from "lodash";

/*
==========================================================================================
  Selectors
==========================================================================================
*/

const selectors = {

  root: document.documentElement,
  html: document.querySelector("html"),
  schemeListener: document.querySelector(".js-toggle-scheme"),
  accentListener: document.querySelector(".js-toggle-accent"),
  randomListener: document.querySelector(".js-random-scheme"),
  resetListener: document.querySelector(".js-reset-scheme")

};

/*
==========================================================================================
  Constants
==========================================================================================
*/

const DARK_SCHEME = "dark";
const LIGHT_SCHEME = "light";
const HUE_ROOT_VAR = "--hue-root";
const DEFAULT_ACCENT = getComputedStyle(selectors.root).getPropertyValue(HUE_ROOT_VAR).trim();

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const ColorScheme = {

  /*
  * Initialize color scheme functionality.
  *
  * Example:
  *
  *   -> Scheme.initialize();
  *
  */
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

  const scheme = currentScheme() || systemScheme();

  updateScheme(scheme);
  setScheme(scheme);

}

const initializeAccent = () => {

  const accent = currentAccent() || DEFAULT_ACCENT;

  updateAccent(accent);
  updateAccentInput(accent);
  setAccent(accent);

};

// binders
const bindScheme = () => {

  selectors.schemeListener.addEventListener("click", (event) => {

    const scheme = currentScheme() === LIGHT_SCHEME ? DARK_SCHEME : LIGHT_SCHEME;

    event.preventDefault();
    updateScheme(scheme);
    setScheme(scheme);

  });

};

const bindAccent = () => {

  selectors.accentListener.addEventListener("input", (event) => {

    const accent = event.target.value;

    event.preventDefault();
    updateAccent(accent);
    setAccent(accent);

  });

};

const bindRandom = () => {

  selectors.randomListener.addEventListener("click", () => {

    const accent = randomAccent();

    event.preventDefault();
    updateAccent(accent);
    updateAccentInput(accent);
    setAccent(accent);

  });

};

const bindReset = () => {

  selectors.resetListener.addEventListener("click", () => {

    resetScheme();
    resetAccent();

  });

};

// getters
const systemScheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK_SCHEME : LIGHT_SCHEME;
const randomAccent = () => `${_.random(360)}`;
const currentScheme = () => localStorage.getItem("scheme");
const currentAccent = () => localStorage.getItem("accent");

// setters
const setScheme = (scheme) => localStorage.setItem("scheme", scheme);
const setAccent = (accent) => localStorage.setItem("accent", accent);

// updaters
const updateScheme = (scheme) => {

  selectors.html.classList.remove(currentScheme());
  selectors.html.classList.add(scheme);

};

const updateAccent = (accent) => selectors.root.style.setProperty(HUE_ROOT_VAR, accent);
const updateAccentInput = (accent) => selectors.accentListener.value = accent;

// resetters
const resetScheme = () => {

  updateScheme(systemScheme());
  setScheme(systemScheme());

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
