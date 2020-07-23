// console.log("task-7");

///////////////////////////////////////////////////////
// // task 1
///////////////////////////////////////////////////////

// const categories = document.querySelectorAll("#categories .item").length;

// console.log(`В списке ${categories} категории.`);

// const listsCategoriesRef = document.querySelectorAll("#categories .item");
// // console.dir(listsRef);

// listsCategoriesRef.forEach((item) =>
//   console.log(
//     `Категория: ${item.querySelector("h2").textContent},
//   Количество элементов: ${item.querySelectorAll("li").length}`
//   )
// );

///////////////////////////////////////////////////////
// // task 2
///////////////////////////////////////////////////////

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const ingredientsList = ingredients.map((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   return li;
// });
// document.querySelector("#ingredients").append(...ingredientsList);

// /////////////////////////////////////////////////////
// // task 3
// /////////////////////////////////////////////////////

// const images = [
//   {
//     url: "https://picsum.photos/300/200",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://picsum.photos/300/202",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://picsum.photos/300/201",
//     alt: "Group of Horses Running",
//   },
// ];

// const createItemGallery = (image) => {
//   const item = document.createElement("li");
//   item.classList.add("gallery__item");

//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;
//   img.width = 500;

//   item.appendChild(img);
//   return item;
// };

// const createGallery = images.map((image) => createItemGallery(image));
// document.querySelector("#gallery").append(...createGallery);

// /////////////////////////////////////////////////////
// // task 4
// /////////////////////////////////////////////////////

// достучаться до кнопок другим методом. через data-action="decrement"
// аптимезировать
(() => {
  const refs = {
    decrement: document.querySelector("[decrement]"),
    increment: document.querySelector("[increment]"),
  };

  refs.decrement.addEventListener("click", res);
  refs.increment.addEventListener("click", add);

  function add() {
    document.querySelector("#value").textContent -= -1;
  }
  function res() {
    document.querySelector("#value").textContent -= 1;
  }
})();

// /////////////////////////////////////////////////////
// // task 5
// /////////////////////////////////////////////////////
