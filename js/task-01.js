const categoriesRoot = document.querySelector("#categories");
const categories = categoriesRoot.querySelectorAll(".item");
console.log("Number of items: " + categories.length);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElementsNumber = category.querySelectorAll("ul > li").length;
  console.log("Category: " + categoryName);
  console.log("Elements: " + categoryElementsNumber);
});
