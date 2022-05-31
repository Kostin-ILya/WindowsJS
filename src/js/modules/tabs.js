const tabs = (
  tabsParentSelector,
  tabsSelector,
  tabsContentSelector,
  activeClass
) => {
  const tabsParent = document.querySelector(tabsParentSelector);
  const tab = document.querySelectorAll(tabsSelector);
  const tabsContent = document.querySelectorAll(tabsContentSelector);

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show');
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabsContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');

    tab[i].classList.add(activeClass);
  }

  tabsParent.addEventListener('click', (e) => {
    const { target } = e;

    if (target && target.closest(tabsSelector)) {
      tab.forEach((item, i) => {
        if (target === item || target.closest(tabsSelector) === item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
  hideTabsContent();
  showTabsContent();
};

export default tabs;
