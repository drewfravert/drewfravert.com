/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import b from "../global/browser.js";
import c from "../global/constants.js";
import s from "../global/selectors.js";
import Helpers from "../global/helpers.js";

/*
==========================================================================================
  Constants
==========================================================================================
*/

// local storage keys
c.schemeKey = "scheme";
c.accentKey = "accent";

// schemes
c.darkScheme = "dark";
c.lightScheme = "light";

// selectors
c.toggleSchemeSelector = ".js-toggle-scheme";
c.toggleAccentSelector = ".js-toggle-accent";
c.resetAppearanceSelector = ".js-reset-appearance";

// miscellaneous
c.prefersDarkScheme = "(prefers-color-scheme: dark)";
c.hueBase = "--hue-base";
c.defaultAccent = getComputedStyle(s.document).getPropertyValue(c.hueBase).trim();

/*
==========================================================================================
  Selectors
==========================================================================================
*/

s.toggleSchemeListener = s.body.querySelector(c.toggleSchemeSelector);
s.toggleAccentListener = s.body.querySelector(c.toggleAccentSelector);
s.resetAppearanceListener = s.body.querySelector(c.resetAppearanceSelector);

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const Appearance = {

  initialize() {

    initializeScheme();
    initializeAccent();

    bindToggleScheme();
    bindToggleAccent();
    bindResetAppearance();

  },

  changeScheme(scheme) {

    updateScheme(scheme);
    updateSchemeToggle(scheme);
    setScheme(scheme);

  },

  changeAccent(accent) {

    updateAccent(accent);
    setAccent(accent);

  },

  resetAppearance() {

    resetAccent();
    resetScheme();

  },

  getCurrentAccent() {

    return localStorage.getItem(c.accentKey);

  },

  getCurrentScheme() {

    return localStorage.getItem(c.schemeKey);

  },

  getSystemScheme() {

    return window.matchMedia(c.prefersDarkScheme).matches ? c.darkScheme : c.lightScheme;

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const initializeScheme = () => {

  const scheme = Appearance.getCurrentScheme() || Appearance.getSystemScheme();

  Appearance.changeScheme(scheme);

};

const initializeAccent = () => {

  const accent = Appearance.getCurrentAccent() || c.defaultAccent;

  Appearance.changeAccent(accent);

};

const bindToggleScheme = () => {

  bindToggleSchemeButtons();
  bindToggleSchemeKeys();

};

const bindToggleSchemeButtons = () => {

  const handler = [b.event.click, (event) => {

    const toggle = event.currentTarget.querySelector("input[type='checkbox']");
    const isChecked = toggle.checked;
    const scheme = isChecked ? c.lightScheme : c.darkScheme;

    event.preventDefault();

    Appearance.changeScheme(scheme);

  }];

  s.toggleSchemeListener.addEventListener(...handler);

};

const bindToggleSchemeKeys = () => {

  const keys = ["~"];
  const toggledScheme = () => Appearance.getCurrentScheme() === c.lightScheme ? c.darkScheme : c.lightScheme;
  const handler = (event) => Appearance.changeScheme(toggledScheme());

  Helpers.bindKeys(keys, handler);

};

const bindToggleAccent = () => {

  const handler = [b.event.input, (event) => {

    const accent = event.currentTarget.value;

    Appearance.changeAccent(accent);

  }];

  s.toggleAccentListener.addEventListener(...handler);

};

const bindResetAppearance = () => {

  bindResetAppearanceButtons();
  bindResetAppearanceKeys();

};

const bindResetAppearanceButtons = () => {

  const handler = [b.event.click, (event) => Appearance.resetAppearance()];

  s.resetAppearanceListener.addEventListener(...handler);

};

const bindResetAppearanceKeys = () => {

  const keys = ["R"];
  const handler = (event) => Appearance.resetAppearance();

  Helpers.bindKeys(keys, handler);

};

const setAccent = (accent) => localStorage.setItem(c.accentKey, accent);
const setScheme = (scheme) => localStorage.setItem(c.schemeKey, scheme);

// updaters
const updateAccent = (accent) => {

  s.document.style.setProperty(c.hueBase, accent);
  s.toggleAccentListener.value = accent;

};

const updateScheme = (scheme) => {

  s.html.classList.remove(Appearance.getCurrentScheme());
  s.html.classList.add(scheme);

};

const updateSchemeToggle = (scheme) => {

  const toggle = s.toggleSchemeListener.querySelector("input[type='checkbox']");
  const checkedValue = scheme === c.darkScheme;

  toggle.checked = checkedValue;

};

const resetScheme = () => Appearance.changeScheme(Appearance.getSystemScheme());
const resetAccent = () => Appearance.changeAccent(c.defaultAccent);

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Appearance;
