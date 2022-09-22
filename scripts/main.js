import { BeyBlog } from "./BeyBlog.js";
import { getAuthors, getCategories, getArticles } from "./database.js";
import { categoriesFunction } from './categories.js'

const authors = getAuthors();
const articles = getArticles();
const categories = getCategories();
const categoriesString = categoriesFunction(categories)

const container = document.querySelector("#container");

const render = () => {
  container.innerHTML = BeyBlog();
};

render();
// * Jesier / Reggie
const articleFunction = (articles) => {
  let articlesHTML = "<ul>";
  for (const article of articles) {
    articlesHTML += `<li id="article--${article.id}>"${article.name}</li>`;
  }
  articlesHTML += "</ul>";
  return articlesHTML;
};
// * Maria / Ricky
const authorsFunction = (authors) => { 
  let authorsHTML = "<ul>";
  for (const author of authors) {
    authorsHTML += `<li id="author--${author.id}>"${author.name}</li>`;
  }
  authorsHTML += "</ul>";
  return authorsHTML;
};
// * Justin
const categoriesFunction = (categories) => {
  let htmlString = "<ul>";
  for (const category of categories) {
    htmlString += `<li id="category--${category.id}>"${category.name}</li>`;
  }
  htmlString += "</ul>";
  return htmlString;
};

const articleString = articleFunction(articles);
const authorsString = authorsFunction(authors);

const categoriesHTML = document.querySelector("#categories");
categoriesHTML.innerHTML = categoriesString;

const articlesHTML = document.querySelector(".articles");
articlesHTML.innerHTML = articleString; // todo: why are we getting an error here?

const authorsHTMLString = document.querySelector("#authors");
authorsHTMLString.innerHTML = authorsString;

// render();
