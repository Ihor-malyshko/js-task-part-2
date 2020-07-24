console.log("task-8");
import galleryItem from "./gallery-item.js";

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const createItemGallery = (image) => {
  const item = document.createElement("li");
  item.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = image.preview;
  img.alt = image.description;
  img.dataSource = image.original;
  link.appendChild(img);
  item.appendChild(link);

  return item;
};

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const buttonCloseRef = document.querySelector(".lightbox__button");
const imgFullRef = document.querySelector(".lightbox__image");

const createGallery = galleryItem.map((image) => createItemGallery(image));
galleryRef.append(...createGallery);

const galleryClick = (event) => {
  if (event.target.nodeName === "IMG") {
    modalRef.classList.add("is-open");
    imgFullRef.src = event.target.dataSource;
  }
};

const closeModal = () => {
  modalRef.classList.remove("is-open");
  imgFullRef.src = "";
};

galleryRef.addEventListener("click", galleryClick);
buttonCloseRef.addEventListener("click", closeModal);
