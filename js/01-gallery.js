import { galleryItems } from './gallery-items.js';
// Change code below this line

const listOfImages = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img
          class="gallery__image"
          src="${galleryItem.preview}"
          data-source="${galleryItem.original}"
          alt="${galleryItem.description}"
        />
      </a>
    </div>`
  )
  .join('');

listOfImages.insertAdjacentHTML('afterbegin', markup);

listOfImages.addEventListener('click', handleOpenImage);

function handleOpenImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img
      class="gallery__image"
      src="${event.target.getAttribute('data-source')}"
      data-source="${event.target.getAttribute('data-source')}"
      alt="${event.target.getAttribute('alt')}"
    />`
  );

  instance.show();
}
