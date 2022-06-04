const tabsModule = () => {
  function bindTabs(
    tabsParentSelector,
    tabsSelector,
    tabsContentSelector,
    activeClass,
    displayClass = 'show'
  ) {
    const tabsParent = document.querySelector(tabsParentSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);

    function hideTabsContent() {
      tabsContent.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove(displayClass);
      });

      tabs.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }
    function showTabsContent(i = 0) {
      tabsContent[i].classList.add(displayClass, 'fade');
      tabsContent[i].classList.remove('hide');

      tabs[i].classList.add(activeClass);
    }

    tabsParent.addEventListener('click', (e) => {
      const { target } = e;

      if (target && target.closest(tabsSelector)) {
        tabs.forEach((item, i) => {
          if (target === item || target.closest(tabsSelector) === item) {
            hideTabsContent();
            showTabsContent(i);
          }
        });
      }
    });
    hideTabsContent();
    showTabsContent();
  }

  bindTabs(
    '.glazing_slider',
    '.glazing_block',
    '.glazing_content',
    'after_click'
  );
  bindTabs(
    '.decoration_slider',
    '.no_click',
    '.decoration_content > div >div',
    'after_click'
  );
  bindTabs(
    '.balcon_icons',
    '.balcon_icons_img',
    '.big_img>img',
    'do_image_more',
    'showInline'
  );
};

export default tabsModule;
