import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const renderGalleryList = (galleryItems) =>
galleryItems.reduce((acc, {original, preview, description}) => 
acc + `
  <a class="gallery__item" href="${original}">
  <img 
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />
   </a>`, ''
);
const galleryList = document.querySelector('.gallery');

const insertGalleryList = (string) => {
      galleryList.insertAdjacentHTML('beforeend', string); 
};

insertGalleryList(renderGalleryList(galleryItems));

const title = document.querySelectorAll('img');

title.forEach(img => {
    img.title = img.alt;
});

const lightbox = new SimpleLightbox('.gallery a',
 { captionsData: 'title',  captionDelay: 250 });
