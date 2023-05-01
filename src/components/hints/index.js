import "./style.scss";

export class Hints {
  container;

  constructor() {
    this.container = document.createElement("aside");
    this.container.classList.add("hints__container");
    const title = document.createElement("h2");
    title.classList.add("hints__title");
    title.textContent = "Hot Keys";
    const list = document.createElement("ul");
    list.textContent = "Change language:";
    list.classList.add("hints__list");
    this.createListItem("For Mac: ", "⌘ Command + ⎵ Space", list);
    this.createListItem("For Windows: ", "⎇ Alt + ⇧ Shift", list);
    const text = document.createElement("p");
    text.classList.add("hints__text");
    text.textContent = "Keyboard was made on Mac OS";
    this.container.append(title, list, text);
  }

  createListItem(firstText, secondText, container) {
    const item = document.createElement("li");
    item.classList.add("hints__item");
    const span = document.createElement("span");
    span.classList.add("hints__span");
    span.textContent = firstText;
    const text = document.createElement("p");
    text.textContent = secondText;
    item.append(text);
    text.prepend(span);
    container.append(item);
  }
}
