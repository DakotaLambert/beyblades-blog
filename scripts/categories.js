import { getCategories } from "./database.js";

const categories = getCategories();

export const categoriesFunction = (categories) => {
    let htmlString = "<ul>";
    for (const category of categories) {
        htmlString += `<li id="category--${category.id}>"${category.name}</li>`;
    }
    htmlString += "</ul>";
    return htmlString;
};

