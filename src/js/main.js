import './modules/slider';
import WOW from './modules/wow';
import { modalsModule } from './modules/modals';
import tabsModule from './modules/tabs';
import formsModule from './modules/forms';
import changeModalStateModule from './modules/changeModalState';
import timerModule from './modules/timer';
import imagesModule from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
  const modalState = {
    form: 0,
    type: 'tree',
  };
  changeModalStateModule(modalState);

  modalsModule('show', 60000, modalState);
  tabsModule();
  formsModule(modalState);
  timerModule('#timer', '2022-10-01');
  imagesModule();

  new WOW().init();
});
