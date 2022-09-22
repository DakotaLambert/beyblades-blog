import { getAuthors } from "./database.js";

export const authorsFunction = (authors) => { 
    let authorsHTML = "<ul>";
    for (const author of authors) {
      authorsHTML += `<li id="author--${author.id}>"${author.name}</li>`;
    }
    authorsHTML += "</ul>";
    return authorsHTML;
  };

  const authors = getAuthors()

  document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if(itemClicked.id.startsWith("author")) {
            const [,getPrimaryKey] = itemClicked.id.split("--")
            let matchingAuthor
        }
    }
  )