console.log("task-7");

/////////////////////////////////////////////////////
// task 1
/////////////////////////////////////////////////////

const categories = document.querySelectorAll("#categories .item").length;

console.log(`В списке ${categories} категории.`);

const listsCategoriesRef = document.querySelectorAll("#categories .item");
// console.dir(listsRef);

listsCategoriesRef.forEach((item) =>
  console.log(
    `Категория: ${item.querySelector("h2").textContent},
  Количество элементов: ${item.querySelectorAll("li").length}`
  )
);

/////////////////////////////////////////////////////
// task 2
/////////////////////////////////////////////////////

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});
document.querySelector("#ingredients").append(...ingredientsList);

/////////////////////////////////////////////////////
// task 3
/////////////////////////////////////////////////////

const images = [
  {
    url: "https://picsum.photos/300/200",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://picsum.photos/300/202",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://picsum.photos/300/201",
    alt: "Group of Horses Running",
  },
];

const createItemGallery = (image) => {
  const item = document.createElement("li");
  item.classList.add("gallery__item");

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.width = 500;

  item.appendChild(img);
  return item;
};

const createGallery = images.map((image) => createItemGallery(image));
document.querySelector("#gallery").append(...createGallery);

/////////////////////////////////////////////////////
// task 4
/////////////////////////////////////////////////////

const decrement = document.querySelector("[decrement]");
const increment = document.querySelector("[increment]");

const changeValue = (event) => {
  if (event.target.getAttribute("data-action") === "decrement") {
    // -1
    document.querySelector("#value").textContent -= 1;
  } else {
    // - (-1) = +1
    document.querySelector("#value").textContent -= -1;
    // document.querySelector("#value").textContent++;
  }
};

decrement.addEventListener("click", changeValue);
increment.addEventListener("click", changeValue);

/////////////////////////////////////////////////////
// task 5
/////////////////////////////////////////////////////

const inputNameRef = document.querySelector("#name-input");
const spanNameRef = document.querySelector("#name-output");

inputNameRef.addEventListener("blur", (event) => {
  spanNameRef.textContent = event.target.value;
});

/////////////////////////////////////////////////////
// task 6
/////////////////////////////////////////////////////

const inputValidRef = document.querySelector("#validation-input");
inputValidRef.addEventListener("blur", (event) => {
  // console.dir(event.target.attributes[2].value);
  // console.dir(event.target.dataset.length);
  // console.dir(inputValidRef.getAttribute("data-length"));
  if (event.target.value.length == inputValidRef.getAttribute("data-length")) {
    inputValidRef.classList.add("valid");
    inputValidRef.classList.remove("invalid");
  } else {
    inputValidRef.classList.add("invalid");
    inputValidRef.classList.remove("valid");
  }
});

/////////////////////////////////////////////////////
// task 7
/////////////////////////////////////////////////////

const inputSizeRef = document.querySelector("#font-size-control");
const spanSizeRef = document.querySelector("#text-size");
inputSizeRef.addEventListener("mouseup", (event) => {
  spanSizeRef.style.fontSize = event.target.value + "px";
});

/////////////////////////////////////////////////////
// task 8
/////////////////////////////////////////////////////

const randomColor = () => {
  const colorR = Math.round(Math.random() * 255);
  const colorG = Math.round(Math.random() * 255);
  const colorB = Math.round(Math.random() * 255);
  return `rgb(${colorR}, ${colorG}, ${colorB})`;
};

const createBoxes = () => {
  const divs = [];
  const value = 10;
  const n = document.querySelector("#controls input").value;
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = randomColor();
    div.style.margin = "5px";
    div.style.width = i * value + 30 + "px";
    div.style.height = i * value + 30 + "px";
    divs.push(div);
  }
  console.dir(divs);
  return divs;
};

const render = () => {
  document.querySelector("#boxes").append(...createBoxes());
};

const destroy = () => {
  document.querySelector("#boxes").innerHTML = '<div id="boxes"></div>';
};

document.querySelector("[render]").addEventListener("click", render);
document.querySelector("[destroy]").addEventListener("click", destroy);
