/*
==========================================================================================
  Dependencies
==========================================================================================
*/

import b from "../global/browser.js";
import c from "../global/constants.js";
import s from "../global/selectors.js";

/*
==========================================================================================
  Constants
==========================================================================================
*/

const TABS_SELECTOR = ".js-tabs";
const TAB_SELECTOR = "[data-tab]";
const TABS_MENU_SELECTOR = ".js-tabs-menu";
const TABS_CONTENT_SELECTOR = ".js-tabs-content";
const DISABLED_ATTRIBUTE = "disabled";
const ACTIVE_CLASS = "active";

/*
==========================================================================================
  Selectors
==========================================================================================
*/

s.tabs = s.body.querySelectorAll(TABS_SELECTOR);

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

  s.tabs.forEach((component) => {

    const menu = component.querySelector(TABS_MENU_SELECTOR);

    bindTabsMenu(menu);

  });

};

const bindTabsMenu = (menu) => {

  const menuItems = menu.querySelectorAll(TAB_SELECTOR);
  const handler = [b.event.click, (event) => switchTab(event)];

  menuItems.forEach((menuItem) => menuItem.addEventListener(...handler));

};

const switchTab = (event) => {

  const element = event.currentTarget;
  const tabID = element.dataset.tab;
  const component = element.closest(TABS_SELECTOR);
  const menu = component.querySelector(TABS_MENU_SELECTOR);
  const content = component.querySelector(TABS_CONTENT_SELECTOR);

  event.preventDefault();
  resetTabs(menu, content);

  // activate requested tab
  element.setAttribute(DISABLED_ATTRIBUTE, true);
  content.querySelector(`[data-tab=${tabID}]`).classList.add(ACTIVE_CLASS);

};

const resetTabs = (menu, content) => {

  menu.querySelectorAll(TAB_SELECTOR).forEach((menuItem) => menuItem.removeAttribute(DISABLED_ATTRIBUTE));
  content.querySelectorAll(TAB_SELECTOR).forEach((contentItem) => contentItem.classList.remove(ACTIVE_CLASS));

};

/*
==========================================================================================
  Exports
==========================================================================================
*/

export default Tabs;
