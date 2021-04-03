import images from './images.js';

const galleryListRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const contentImgRef = document.querySelector('.lightbox__image');


const galleryMarkup = images.map(el => {
  return `
    <li class="gallery__item">
    <a
     class="gallery__link"
       href="${el.original}"
 >
    <img
    id='scl'
    class="gallery__image"
    src ="${el.preview}"
    data-source="${el.original}"
     alt="${el.description}"
    />
  </a>
</li>
`});

galleryListRef.insertAdjacentHTML('beforeend', galleryMarkup.join(''));
document.querySelectorAll('.gallery__image')

galleryListRef.addEventListener('click', onClickModalOpen)
modalRef.addEventListener('click', onClickModalClose)
window.addEventListener('keyup', showNextPictureKey);
window.addEventListener('keyup', onKeyModalEscClose);

function onClickModalClose(e) {
  if (e.target.nodeName !== "DIV" && e.target.nodeName !== 'BUTTON') {
    return
  };
  closeAndCleanSrc();
};
function onKeyModalEscClose(e) {
  if (e.key !== 'Escape') {
    return
  };
  closeAndCleanSrc();
};
function closeAndCleanSrc() {
  modalRef.classList.toggle('is-open');
  contentImgRef.src = '';
  contentImgRef.alt = '';
};

let activeIndex = 0;

function onClickModalOpen(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return
  };
  for (let el of galleryMarkup) {
    if (el.includes(e.target.src)) {
      activeIndex = galleryMarkup.indexOf(el);
    }
  }
  closeAndCleanSrc();

  let modalLink = e.target.dataset.source;
  contentImgRef.src = modalLink;
};
function showNextPictureKey(e) {
  if (e.key === 'ArrowLeft' && activeIndex >= 0) {
    activeIndex -= 1
  }

  if (e.key === 'ArrowRight' && activeIndex < images.length - 1) {
    activeIndex += 1
  }

  if (activeIndex === images.length - 1) {
    activeIndex = 0
  }

  if (activeIndex === -1) {
    activeIndex = images.length - 1
  }
  contentImgRef.src = images[activeIndex].original
}
const logs = 4












