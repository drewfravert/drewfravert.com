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

c.modalSelector = ".js-modal";
c.modalOpenSelector = ".js-open-modal";
c.modalCloseSelector = ".js-close-modal";
c.modalCloseKeys = [c.key.escape];
c.overlayClass = "overlay";
c.activeClass = "active";

/*
==========================================================================================
  Selectors
==========================================================================================
*/

s.modals = s.body.querySelectorAll(c.modalSelector);
s.modalOpenListeners = s.body.querySelectorAll(c.modalOpenSelector);

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const Modals = {

  initialize() {

    bindModalOpenActions();
    bindModalCloseActions();

  },

  openModal(modalID) {

    addOverlay();
    addModal(modalID);

  },

  closeModal(modalID) {

    removeOverlay();
    removeModal(modalID);

  },

  toggleModal(modalID) {

    const modal = getRequestedModal(modalID);
    const isModalActive = modal.classList.contains(c.activeClass);

    isModalActive ? Modals.closeModal(modalID) : Modals.openModal(modalID);

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const bindModalOpenActions = () => {

  bindModalOpenKeys();
  bindModalOpenListeners();

};

const bindModalOpenKeys = () => {

  s.modals.forEach((modal) => {

    const modalID = modal.dataset.modal;
    const keys = modal.dataset.keys;
    const handler = (event) => Modals.toggleModal(modalID);

    Helpers.bindKeys(keys, handler);

  });

};

const bindModalOpenListeners = () => {

  const handler = [b.event.click, (event) => {

    const element = event.currentTarget;
    const modalID = element.dataset.modal;

    Modals.openModal(modalID);

  }];

  s.modalOpenListeners.forEach((listener) => listener.addEventListener(...handler));

};

const bindModalCloseActions = () => {

  s.modals.forEach((modal) => {

    bindModalCloseButtons(modal);
    bindModalCloseKeys(modal);

  });

};

const bindModalCloseButtons = (modal) => {

  const handler = [b.event.click, (event) => {

    const modalID = modal.dataset.modal;
    const isCloseButton = event.target.matches(c.modalCloseSelector);

    isCloseButton && Modals.closeModal(modalID);

  }];

  modal.addEventListener(...handler);

};

// TODO: REPLACE WITH HELPER
const bindModalCloseKeys = (modal) => {

  const handler = [b.event.keydown, (event) => {

    const modalID = modal.dataset.modal;
    const isCloseKey = c.modalCloseKeys.includes(event.key);

    isCloseKey && Modals.closeModal(modalID);

  }];

  window.addEventListener(...handler);

};

const getRequestedModal = (modalID) => [...s.modals].find((modal) => modal.dataset.modal === modalID);

const addModal = (modalID) => {

  const modal = getRequestedModal(modalID);

  modal.classList.add(c.activeClass);

};

const removeModal = (modalID) => {

  const modal = getRequestedModal(modalID);

  modal.classList.remove(c.activeClass);

};

const addOverlay = () => s.body.classList.add(c.overlayClass);
const removeOverlay = () => s.body.classList.remove(c.overlayClass);

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Modals;
