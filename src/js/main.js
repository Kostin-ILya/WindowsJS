import './modules/slider';
import { modalsModule } from './modules/modals';
import tabsModule from './modules/tabs';
import formsModule from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  modalsModule();
  tabsModule();
  formsModule();
});
