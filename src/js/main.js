import './modules/slider';
import modalsModule from './modules/modals';
import tabsModule from './modules/tabs';
import formsModule from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const modalTimerId = setTimeout(() => {
    document.querySelector('.popup').classList.add('show');
    document.body.classList.add('overflow');
  }, 50000);

  modalsModule(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close',
    modalTimerId
  );
  modalsModule('.phone_link', '.popup', '.popup .popup_close', modalTimerId);
  modalsModule(
    '.popup_calc_btn',
    '.popup_calc',
    '.popup_calc_close',
    modalTimerId
  );
  modalsModule(
    '.popup_calc_button',
    '.popup_calc_profile',
    '.popup_calc_profile_close'
  );
  modalsModule(
    '.popup_calc_profile_button',
    '.popup_calc_end',
    '.popup_calc_end_close'
  );

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
  tabsModule(
    '.balcon_icons',
    '.balcon_icons_img',
    '.big_img>img',
    'do_image_more',
    'showInline'
  );

  formsModule('.form');
});
