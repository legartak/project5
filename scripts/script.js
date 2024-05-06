let currentReasonSlide = 0;

const slidesNums = ["1", "2", "3", "4"];
const reasonTitle = [
  "Стерильні умови приготування",
  "Швидка доставка",
  "Широкий вибір начинок",
  "Майстри своєї справи",
];
const reasonText = [
  "Наші кухарі користуються рукавичками, а всі поверхні та інструменти стерилізуються кожні 3 години.",
  "Заклад знаходиться в центрі міста, тому доставка займе до 25 хвилин.",
  "Ви завжди можете прибрати або додати інгрідієнти згідно з вашим смаком - у нас так можна!",
  "У нас працюють кухарі з мінімум чотирьохрічним стажем. Вони знають, як приготувати смачну шаурму!",
];

let chosenReasonElement = [1, 0, 0, 0];

function showReasonSlide() {
  document.querySelector(".reason-slide .reason-number").innerHTML =
    slidesNums[currentReasonSlide];
  document.querySelector(".reason-slide .reason-title").innerHTML =
    reasonTitle[currentReasonSlide];
  document.querySelector(".reason-slide .reason-text").innerHTML =
    reasonText[currentReasonSlide];

  let selectedItems = document.createElement("div");
  selectedItems.setAttribute("class", "reason-selected");

  makeSelected(true, chosenReasonElement);
}

function nextReason() {
  currentReasonSlide =
    currentReasonSlide === slidesNums.length - 1 ? 0 : currentReasonSlide + 1;

  if (currentReasonSlide === 0) {
    chosenReasonElement[0] = 1;
    chosenReasonElement[chosenReasonElement.length - 1] = 0;
  } else {
    chosenReasonElement[currentReasonSlide] = 1;
    chosenReasonElement[currentReasonSlide - 1] = 0;
  }
  showReasonSlide();
}

function prevReason() {
  currentReasonSlide =
    currentReasonSlide === 0 ? slidesNums.length - 1 : currentReasonSlide - 1;

  if (currentReasonSlide === slidesNums.length - 1) {
    chosenReasonElement[currentReasonSlide] = 1;
    chosenReasonElement[0] = 0;
  } else {
    chosenReasonElement[currentReasonSlide] = 1;
    chosenReasonElement[currentReasonSlide + 1] = 0;
  }
  showReasonSlide();
}

function makeSelected(isReason, chosenElement) {
  let oldSelected = document.getElementsByClassName(
    isReason ? "reason-selected" : "review-selected"
  );

  let selectedItems = document.createElement("div");
  selectedItems.setAttribute(
    "class",
    isReason ? "reason-selected" : "review-selected"
  );

  for (let i = 0; i < slidesNums.length; i++) {
    let newItem = document.createElement("img");
    newItem.src =
      chosenElement[i] === 0
        ? "assets/icons/rb_off.svg"
        : "assets/icons/rb_on.svg";
    newItem.setAttribute(
      "class",
      chosenElement[i] === 0 ? "radio-button off" : "radio-button on"
    );
    selectedItems.appendChild(newItem);
  }

  oldSelected[0].replaceWith(selectedItems);
}

let currentReviewSlide = 0;
let chosenReviewElement = [1, 0, 0, 0];

const reviewersName = ["Назар", "Ганна", "Ігор", "Сніжанна"];
const reviewersScore = [4, 5, 5, 4];
const customerPhoto = [
  "assets/img/nazar.webp",
  "assets/img/hanna.webp",
  "assets/img/ihor.webp",
  "assets/img/snizhanna.webp",
];
const customerReview = ["Смачно!", "Наїлась =)", "ммммммм..", "я <3 шаву"];

function showReviewSlide() {
  let oldSlideCustomerPhoto = document.getElementsByClassName(
    "slide-customer-photo"
  );

  let newPhoto = document.createElement("img");
  newPhoto.src = customerPhoto[currentReviewSlide];
  newPhoto.alt = "Фото клієнта " + reviewersName[currentReviewSlide];
  newPhoto.setAttribute("class", "slide-customer-photo");

  oldSlideCustomerPhoto[0].replaceWith(newPhoto);

  let oldCustomerName = document.getElementsByClassName("slide-customer");

  let newName = document.createElement("p");
  newName.innerText = reviewersName[currentReviewSlide];
  newName.setAttribute("class", "slide-customer nanum-gothic-bold");
  oldCustomerName[0].replaceWith(newName);

  let oldRating = document.getElementsByClassName("slide-rating");
  let newRating = makeRating();
  oldRating[0].replaceWith(newRating);

  let oldReview = document.getElementsByClassName("slide-review-text");

  let newReview = document.createElement("p");
  newReview.innerText = customerReview[currentReviewSlide];
  newReview.setAttribute("class", "slide-review-text nanum-gothic-regular");
  oldReview[0].replaceWith(newReview);

  makeSelected(false, chosenReviewElement);
}

function makeRating() {
  let rating = document.createElement("div");
  rating.setAttribute("class", "slide-rating");

  for (let i = 0, filledStars = 0; i < 5; i++) {
    let star = document.createElement("img");
    star.setAttribute("class", "star");
    if (filledStars < reviewersScore[currentReviewSlide]) {
      star.alt = "1 зірка рейтингу";
      star.src = "assets/icons/rating_star_filled.svg";
      filledStars++;
    } else {
      star.alt = "Порожня зірка рейтингу";
      star.src = "assets/icons/rating_star.svg";
    }
    rating.appendChild(star);
  }

  return rating;
}

function nextReview() {
  currentReviewSlide =
    currentReviewSlide === chosenReviewElement.length - 1
      ? 0
      : currentReviewSlide + 1;

  if (currentReviewSlide === 0) {
    chosenReviewElement[0] = 1;
    chosenReviewElement[chosenReviewElement.length - 1] = 0;
  } else {
    chosenReviewElement[currentReviewSlide] = 1;
    chosenReviewElement[currentReviewSlide - 1] = 0;
  }
  showReviewSlide();
}

function prevReview() {
  currentReviewSlide =
    currentReviewSlide === 0
      ? chosenReviewElement.length - 1
      : currentReviewSlide - 1;

  if (currentReviewSlide === chosenReviewElement.length - 1) {
    chosenReviewElement[currentReviewSlide] = 1;
    chosenReviewElement[0] = 0;
  } else {
    chosenReviewElement[currentReviewSlide] = 1;
    chosenReviewElement[currentReviewSlide + 1] = 0;
  }
  showReviewSlide();
}

showReasonSlide();
showReviewSlide();
