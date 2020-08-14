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

    bindModalActions();

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

const bindModalActions = () => {

  bindOpenModalButtons();

  s.modals.forEach((modal) => {

    bindToggleModalKeys(modal);
    bindCloseModalKeys(modal);
    bindCloseModalButtons(modal);

  });

};

const bindOpenModalButtons = () => {

  const handler = [b.event.click, (event) => {

    const element = event.currentTarget;
    const modalID = element.dataset.modal;

    Modals.openModal(modalID);

  }];

  s.modalOpenListeners.forEach((listener) => listener.addEventListener(...handler));

};

const bindCloseModalButtons = (modal) => {

  const handler = [b.event.click, (event) => {

    const modalID = modal.dataset.modal;
    const isCloseButton = event.target.matches(c.modalCloseSelector);

    isCloseButton && Modals.closeModal(modalID);

  }];

  modal.addEventListener(...handler);

};

const bindToggleModalKeys = (modal) => {

  const modalID = modal.dataset.modal;
  const keys = modal.dataset.keys;
  const handler = (event) => Modals.toggleModal(modalID);

  Helpers.bindKeys(keys, handler);

};

const bindCloseModalKeys = (modal) => {

  const modalID = modal.dataset.modal;
  const keys = [c.key.escape];
  const handler = (event) => Modals.closeModal(modalID);

  Helpers.bindKeys(keys, handler);

};

const getRequestedModal = (modalID) => [...s.modals].find((modal) => modal.dataset.modal === modalID);

const addModal = (modalID) => getRequestedModal(modalID).classList.add(c.activeClass);
const removeModal = (modalID) => getRequestedModal(modalID).classList.remove(c.activeClass);

const addOverlay = () => s.body.classList.add(c.overlayClass);
const removeOverlay = () => s.body.classList.remove(c.overlayClass);

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Modals;
