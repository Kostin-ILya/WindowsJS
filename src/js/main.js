import './modules/slider';
import { modalsModule } from './modules/modals';
import tabsModule from './modules/tabs';
import formsModule from './modules/forms';
import changeModalStateModule from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const modalState = {};
  changeModalStateModule(modalState);

  modalsModule();
  tabsModule();
  formsModule(modalState);
});
