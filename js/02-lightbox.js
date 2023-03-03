import { galleryItems } from './gallery-items.js';
// Change code below this line

const listOfImages = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item">
      <a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
      </a>
    </div>`
  )
  .join('');

listOfImages.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {captionType: 'attr', captionsData: 'alt', captionDelay: 250});
