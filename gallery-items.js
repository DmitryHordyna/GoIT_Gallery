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
`
}).join('')
galleryListRef.insertAdjacentHTML('beforeend', galleryMarkup)

// === step 2

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








// const modalRef = document.querySelector('.lightbox')
// const contentImgRef = document.querySelector('.lightbox__image')

// const imgListRef=document.querySelector('.gallery__item')
// galleryListRef.addEventListener('click', onClickModalOpen)

// function onClickModalOpen({target})  {
//   if (target.nodeName === 'IMG') {
//     modalRef.classList.add('is-open')

//     contentImgRef.src = target.src
//     contentImgRef.alt=target.alt
//   }
// }

// modalRef.addEventListener('click', onClickModalClose)

// function onClickModalClose(e){
//   if (e.currentTarget !== e.target) {
    
//   modalRef.classList.remove('is-open')
//   }
// }

// // step 3

// window.addEventListener('keyup', onKeyModalEsc)

// function onKeyModalEsc(e) {
//   if (e.key === 'Escape') {
//      modalRef.classList.remove('is-open')
//   }
// }

// window.addEventListener('keyup', onKeyModalLeftRight)

// function onKeyModalLeftRight(e) {
//   console.log(e.key);
//   if (e.key === 'ArrowLeft') {
//     console.log(imgListRef.childNodes[1].src);
//   // console.log(contentImgRef.src)
//   //   console.log(contentImgRef.alt)
//   }
// }