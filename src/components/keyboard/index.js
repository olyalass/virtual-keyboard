import "./style.scss";
import { Key } from "../key";
import keys from "./keys.json";

export class Keyboard {
  container;
  charKeysArr = [];
  keysArr = [];

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("keyboard__container");
    keys.forEach((e) => {
      let key = new Key(e);
      if (e.type === "char") {
        this.charKeysArr.push(key);
      }
      this.keysArr.push(key);
      this.container.append(key.container);
    });
  }

  changeNames(isCaps, lang) {
    this.charKeysArr.forEach((e) => {
      if (lang === "eng") {
        isCaps && e.obj.onShift
          ? (e.text.textContent = e.obj.onShift)
          : (e.text.textContent = e.obj.key);
      } else {
        if (isCaps) {
          e.obj.langOnShift
            ? (e.text.textContent = e.obj.langOnShift)
            : (e.text.textContent = e.obj.onShift);
        } else {
          e.obj.lang
            ? (e.text.textContent = e.obj.lang)
            : (e.text.textContent = e.obj.key);
        }
      }
    });
  }
}
