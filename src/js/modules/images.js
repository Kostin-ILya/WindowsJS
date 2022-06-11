const imagesModule = () => {
  const imgPopup = document.createElement('div');
  const imgParentSection = document.querySelector('.works');
  const bigImg = document.createElement('img');

  imgParentSection.append(imgPopup);
  imgPopup.append(bigImg);

  imgPopup.classList.add('popup__img');

  imgParentSection.addEventListener('click', (e) => {
    e.preventDefault();

    const { target } = e;

    if (target && target.classList.contains('preview')) {
      imgPopup.classList.add('show_flex');
      document.body.classList.add('overflow');

      bigImg.src = target.parentNode.href; // у фото родитель ссылка с верным путем к фото
    }
    if (target && target.matches('.popup__img')) {
      imgPopup.classList.remove('show_flex');
      document.body.classList.remove('overflow');
    }
  });
};

export default imagesModule;
