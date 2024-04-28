import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

let ulGallery = document.querySelector('.gallery');

galleryItems.forEach(itemImage => {
  let li = `
    <li class="gallery__item">
        <a class="gallery__link" href="${itemImage.original}">
            <img class="gallery__image"  src="${itemImage.preview}" alt="${itemImage.description}" />
        </a>
    </li>
    `;
  ulGallery.innerHTML += li;
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('show.simplelightbox');
