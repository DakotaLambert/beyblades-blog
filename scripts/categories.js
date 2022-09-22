import { getCategories } from "./database.js";

const categories = getCategories()

export const categoriesFunction = (categories) => {
    let categoryHTML = "<ul>";
    for (const category of categories) {
      categoryHTML += `<li id="category--${category.id}>"${category.name}</li>`;
    }
    categoryHTML += "</ul>";
    return categoryHTML;
  };