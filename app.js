/*
 ** ---PART 1---
 ** modify the dom
 */

// add classes
const headingModify = document.getElementById("heading-modify");
const redButton = document.getElementById("red-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const noneButton = document.getElementById("none-button");

redButton.addEventListener("click", () => {
  headingModify.classList.remove("green-text", "blue-text");
  headingModify.classList.add("red-text");
});

greenButton.addEventListener("click", () => {
  headingModify.classList.remove("red-text", "blue-text");
  headingModify.classList.add("green-text");
});

blueButton.addEventListener("click", () => {
  headingModify.classList.remove("red-text", "green-text");
  headingModify.classList.add("blue-text");
});

noneButton.addEventListener("click", () => {
  headingModify.classList.remove("red-text", "green-text", "blue-text");
});

// add style
const smallPaddingButton = document.getElementById("padding-none-button");
const largePaddingButton = document.getElementById("padding-large-button");
const resetButton = document.getElementById("reset-button");
const taskModify = document.getElementById("task-modify");
smallPaddingButton.addEventListener("click", function() {
  taskModify.style.padding = "0";
});

largePaddingButton.addEventListener("click", function() {
  taskModify.style.padding = "3em";
});

resetButton.addEventListener("click", function() {
  taskModify.style.padding = "";
});

// add and remove extra content
const articleSection = document.getElementById("article-section");
const addPostButton = document.getElementById("add-post-button");
const removePostButton = document.getElementById("remove-post-button");

function createArticle() {
  const newArticle = document.createElement("article");
  const newHeading = document.createElement("h5");
  const newParagraph = document.createElement("p");

  newHeading.textContent = "A new Blog Post";
  newParagraph.textContent =
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.";

  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);

  return newArticle;
}

addPostButton.addEventListener("click", () => {
  const newArticle = createArticle();
  articleSection.appendChild(newArticle);
});

removePostButton.addEventListener("click", () => {
  const articleCount = articleSection.childElementCount;

  if (articleCount > 1) {
    articleSection.removeChild(articleSection.childNodes[articleCount - 1]);
  }
});
