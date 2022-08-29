import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');
const imageMarkup = createItemsMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', imageMarkup);

function createItemsMarkup(image) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
        })
        .join("");
}

const onClickContainer = (evt) => {
    evt.preventDefault();

    const isGalleryEl = evt.target.classList.contains('gallery');

    if (isGalleryEl) {
      return;
    }

    const source = evt.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${source}" width="800" height="600">
    `);

    instance.show();
}

galleryContainerEl.addEventListener("click", onClickContainer);