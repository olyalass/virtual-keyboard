import "./style.scss";
import { Key } from "../key";
import keys from "./keys.json";

export class Keyboard {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("keyboard__container");
    keys.forEach((e) => {
      let key;
      e.type === "char"
        ? (key = new Key(e))
        : e.name
        ? (key = new Key(e))
        : (key = new Key(e));
      this.container.append(key.container);
    });
  }
}
