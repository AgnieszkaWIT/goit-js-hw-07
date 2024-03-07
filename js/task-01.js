const categories = document.getElementById("categories");
const categoriesItems = categories.querySelectorAll(".item");
console.log("Number of items: " + categoriesItems.length);

categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElementsNumber = category.querySelectorAll("ul > li").length;
  console.log("Category: " + categoryName);
  console.log("Elements: " + categoryElementsNumber);
});
