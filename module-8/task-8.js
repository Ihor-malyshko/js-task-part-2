console.log("task-8");
import galleryItem from "./gallery-item.js";

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const createItemGallery = (image) => {
  const item = document.createElement("li");
  item.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  // link.href = image.original;
  // link.preventDefault();

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

const nextImg = (key) => {
  const srcNow = galleryItem.map((item) => item.original);
  if (key.code === "ArrowRight") {
    for (let i = 0; i < srcNow.length - 1; i++) {
      if (srcNow[i] === imgFullRef.src) {
        imgFullRef.src = srcNow[i + 1];
        break;
      }
    }
  }
  if (key.code === "ArrowLeft") {
    for (let i = 1; i < srcNow.length; i++) {
      if (srcNow[i] === imgFullRef.src) {
        imgFullRef.src = srcNow[i - 1];
        break;
      }
    }
  }
};

const galleryClick = (event) => {
  if (event.target.nodeName === "IMG") {
    modalRef.classList.add("is-open");
    imgFullRef.src = event.target.dataSource;
    window.addEventListener("keydown", closeModal);
    window.addEventListener("keydown", nextImg);
  }
};

const closeModal = (key) => {
  if (event.target.nodeName === "BUTTON" || key.code == "Escape") {
    modalRef.classList.remove("is-open");
    imgFullRef.src = "";
    window.removeEventListener("keydown", closeModal);
    window.addEventListener("keydown", nextImg);
  }
};

galleryRef.addEventListener("click", galleryClick);
buttonCloseRef.addEventListener("click", closeModal);
