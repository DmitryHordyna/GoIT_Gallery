import images from './images.js';


const galleryListRef = document.querySelector('.js-gallery')
const modalRef = document.querySelector('.js-lightbox')
const contentImgRef = document.querySelector('.lightbox__image')


const galleryMarkup = images.map(el => {
    return  `
    <li class="gallery__item">
    <a
     class="gallery__link"
   
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
`
    // href="${el.original}"
}).join('')
galleryListRef.insertAdjacentHTML('beforeend', galleryMarkup)

galleryListRef.addEventListener('click',onClickModalOpen)
function onClickModalOpen(e) {
  if (e.target.nodeName !== "IMG") {
    return 
  }

  modalRef.classList.add('is-open')
    contentImgRef.src = e.target.src
  contentImgRef.alt = e.target.alt
  
  console.log(e.target.dataset.source);

}

modalRef.addEventListener('click', onClickModalClose)
function onClickModalClose(e) {
  if (e.target.nodeName !== "DIV") {
    return
  }
  modalRef.classList.remove('is-open')
   contentImgRef.src = '';
  contentImgRef.alt = '';
}

modalRef.addEventListener('click', onClickBtn)

function onClickBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return
  }
      modalRef.classList.remove('is-open')
     contentImgRef.src = '';
  contentImgRef.alt = '';
}

window.addEventListener('keyup', onKeyModalEsc)
function onKeyModalEsc(e) {
  if (e.key !== 'Escape') {
    return
  }
     modalRef.classList.remove('is-open')
     contentImgRef.src = '';
  contentImgRef.alt = '';
}

// window.addEventListener('keyup', onKeyLeftRight)
// function onKeyLeftRight(e) {
//   if (e.key === 'ArrowLeft') {
// console.log( );
  // contentImgRef.alt
//   }
//   if (e.key === 'ArrowRight') {
//         console.log('r');
//   }
// }





