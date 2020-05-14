/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import { events } from "../global/Browser.js";
import Selectors from "../global/Selectors.js";

/*
==========================================================================================
  Selectors
==========================================================================================
*/

Selectors.tabs = Selectors.global.body.querySelectorAll(".js-tabs");

/*
==========================================================================================
  Public Functions
==========================================================================================
*/

const Tabs = {

  initialize() {

    initializeTabs();

  }

};

/*
==========================================================================================
  Private Functions
==========================================================================================
*/

const initializeTabs = () => {

  Selectors.tabs.forEach((component) => {

    const menu = component.querySelector(".js-tabs-menu");

    bindTabsMenu(menu);

  });

};

const bindTabsMenu = (menu) => {

  const menuItems = menu.querySelectorAll("[data-tab]");

  menuItems.forEach((menuItem) => {

    menuItem.addEventListener(events.click, (event) => switchTab(event));

  });

};

const switchTab = (event) => {

  const element = event.target;
  const tabID = element.dataset.tab;
  const component = element.closest(".js-tabs");
  const menu = component.querySelector(".js-tabs-menu");
  const content = component.querySelector(".js-tabs-content");

  event.preventDefault();
  resetTabs(menu, content);

  // activate requested tab
  element.setAttribute("disabled", true);
  content.querySelector(`[data-tab=${tabID}]`).classList.add("active");

};

const resetTabs = (menu, content) => {

  menu.querySelectorAll("[data-tab]").forEach((menuItem) => menuItem.removeAttribute("disabled"));
  content.querySelectorAll("[data-tab]").forEach((contentItem) => contentItem.classList.remove("active"));

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Tabs;
