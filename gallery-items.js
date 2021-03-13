import images from './images.js';

const galleryListRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const contentImgRef = document.querySelector('.lightbox__image');


const galleryMarkup = images.map((el,index) => {
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
     data-index='${index+1}';
    />
  </a>
</li>
`}).join('');

 galleryListRef.insertAdjacentHTML('beforeend', galleryMarkup);


const allImgGalerry=document.querySelectorAll('.gallery__image')

// console.log(allImgGalerry);


galleryListRef.addEventListener('click', onClickModalOpen);
modalRef.addEventListener('click', onClickModalClose);
window.addEventListener('keyup', showNextPictureKey);
window.addEventListener('keyup', onKeyModalEscClose);


function onClickModalOpen(e) {
    e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return 
  };
  closeAndCleanSrc();
  
  let modalLink = e.target.dataset.source;
  contentImgRef.src = modalLink;
};
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

function showNextPictureKey(e) {
  if (e.key === 'ArrowLeft') {
    for (let i = 0; i < allImgGalerry.length; i += 1) {
      if (allImgGalerry[i].dataset.source === contentImgRef.src) {
        contentImgRef.src = allImgGalerry[i - 1].dataset.source;
      } else (contentImgRef.dataset.index === 1){
        
      }
    };
  };
  if (e.key === 'ArrowRight') {
  //   for (let i = 0; i < allImgGalerry.length; i += 1) {
  //     if (allImgGalerry[i].dataset.source === contentImgRef.src) {
  //       contentImgRef.src=allImgGalerry[i + 1].dataset.source;
       
      
  //     }
  //   }
  }
}

function closeAndCleanSrc() {
  modalRef.classList.toggle('is-open');
  contentImgRef.src = '';
  contentImgRef.alt = '';
};








