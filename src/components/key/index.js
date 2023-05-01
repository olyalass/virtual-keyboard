import { is } from "immutable";
import "./style.scss";

export class Key {
  container;
  face;
  text;
  isCaps;
  obj;

  constructor(keyObj) {
    this.obj = keyObj;
    this.container = document.createElement("div");
    this.container.classList.add("key__container");
    this.face = document.createElement("div");
    this.face.classList.add("key__face");
    this.text = document.createElement("p");
    this.text.classList.add("key__text");
    keyObj.type === "char"
      ? (this.text.textContent = keyObj.key)
      : keyObj.name !== undefined
      ? (this.text.textContent = keyObj.name)
      : (this.text.textContent = keyObj.code);
    this.face.append(this.text);
    if (keyObj.size) {
      keyObj.size === 2
        ? this.container.classList.add("key__container_s")
        : keyObj.size === 3
        ? this.container.classList.add("key__container_event_m")
        : keyObj.size === 4
        ? this.container.classList.add("key__container_event_l")
        : keyObj.size === 5
        ? this.container.classList.add("key__container_event_xl")
        : this.container.classList.add("key__container_xs");
    }
    this.container.append(this.face);
    if (keyObj.type === "event") {
      keyObj.isArrow
        ? this.container.classList.add("key__container_arrow")
        : this.container.classList.add("key__container_event");
    }

    this.container.addEventListener("click", () => {
      this.container.classList.add("key__container_clicked");
      this.container.classList.add("key__face_clicked");
      if (keyObj.code === "CapsLock") {
        this.setOnMode();
      }
      const event = new CustomEvent("custom-key", {
        bubbles: true,
        detail: { obj: keyObj, isCaps: this.isCaps },
      });
      this.container.dispatchEvent(event);
      setTimeout(() => {
        this.container.classList.remove("key__container_clicked");
        this.container.classList.remove("key__face_clicked");
      }, 300);
    });
  }

  setOnMode() {
    this.face.classList.toggle("key__face_on");
    this.isCaps ? (this.isCaps = false) : (this.isCaps = true);
  }
}
