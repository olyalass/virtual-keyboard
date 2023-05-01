import "./style.scss";
import { Hints } from "../hints";

export class Header {
  item;

  constructor() {
    this.item = document.createElement("header");
    this.item.classList.add("header");
    const title = document.createElement("h1");
    title.classList.add("header__title");
    title.textContent = "Virtual Keyboard";
    const note = document.createElement("p");
    note.classList.add("header__note");
    note.textContent = "Info";
    const hints = new Hints();
    const cover = document.createElement("div");
    cover.classList.add("header__cover");
    this.item.append(title, note, hints.container, cover);
    note.addEventListener("click", () => {
      hints.container.classList.toggle("hints__container_open");
    });
  }
}
