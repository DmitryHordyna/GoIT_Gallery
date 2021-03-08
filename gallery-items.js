import images from './images.js';

const galleryListRef = document.querySelector('.js-gallery')
const modalRef = document.querySelector('.js-lightbox')
const contentImgRef = document.querySelector('.lightbox__image')


const galleryMarkup = images.map(el => {
    return  `
    <li class="gallery__item">
    <a
     class="gallery__link"
       href="${el.original}"

"
 >
    <img
    class="gallery__image"
    src ="${el.preview}"
    data-source="${el.original}"
     alt="${el.description}"
    />
  </a>
</li>
`}).join('')

galleryListRef.insertAdjacentHTML('beforeend', galleryMarkup)
galleryListRef.addEventListener('click', onClickModalOpen)
modalRef.addEventListener('click', onClickModalClose)
modalRef.addEventListener('click', onClickBtnClose)
window.addEventListener('keyup', onKeyModalEscClose)

function onClickModalOpen(e) {
    e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return 
  }
 closeAndCleanSrc()
  
  let modalLink=e.target.dataset.source
 contentImgRef.src=modalLink

}
function onClickModalClose(e) {
  if (e.target.nodeName !== "DIV") {
    return
  }
 closeAndCleanSrc()
}
function onClickBtnClose(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return
  }
     closeAndCleanSrc()
}
function onKeyModalEscClose(e) {
  if (e.key !== 'Escape') {
    return
  }
closeAndCleanSrc()
}
function closeAndCleanSrc() {
       modalRef.classList.toggle('is-open')
     contentImgRef.src = '';
  contentImgRef.alt = '';
}





