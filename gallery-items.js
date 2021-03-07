import images from './images.js';


const galleryListRef = document.querySelector('.js-gallery')

const galleryMarkup = images.map(el => {
    return  `
    <li class="gallery__item">
    <a
  class="gallery__link"
    href="${el.original}">
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

galleryListRef.insertAdjacentHTML('beforeend',galleryMarkup)