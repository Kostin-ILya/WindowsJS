import './modules/slider';
import popupModule from './modules/modals';
import tabsModule from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
  popupModule();
  tabsModule(
    '.glazing_slider',
    '.glazing_block',
    '.glazing_content',
    'after_click'
  );
  tabsModule(
    '.decoration_slider',
    '.no_click',
    '.decoration_content > div >div',
    'after_click'
  );
});
