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

const articleFunction = (articles) => {
  let articlesHTML = "<ul>";
  for (const article of articles) {
    articlesHTML += `<li id="article--${article.id}>"${article.name}</li>`;
  }
  articlesHTML += "</ul>";
  return articlesHTML;
};

const authorsFunction = (authors) => {
  let authorsHTML = "<ul>";
  for (const author of authors) {
    authorsHTML += `<li id="author--${author.id}>"${author.name}</li>`;
  }
  authorsHTML += "</ul>";
  return authorsHTML;
};

const articleString = articleFunction(articles);
const authorsString = authorsFunction(authors);

let categoriesHTML = document.querySelector("#categories");
categoriesHTML.innerHTML = categoriesString;

const articlesHTML = document.querySelector("#articles");
articlesHTML.innerHTML = articleString; // todo: why are we getting an error here?

const authorsHTMLString = document.querySelector("#authors");
authorsHTMLString.innerHTML = authorsString;

// render();
