import "./style.scss";

export class Footer {
  item;

  constructor() {
    this.item = document.createElement("footer");
    this.item.classList.add("footer");
    const text = document.createElement("p");
    text.classList.add("footer__text");
    text.textContent = "Developed and designed by ";
    const link = document.createElement("a");
    link.classList.add("footer__link");
    link.textContent = "Olya Lass";
    link.setAttribute("href", "https://github.com/olyalass");
    text.append(link);
    const date = document.createElement("p");
    date.classList.add("footer__text", "footer__link");
    date.textContent = "2023";
    this.item.append(text, date);
  }
}
