import "./style.scss";

export class Key {
  container;

  constructor(keyObj) {
    this.container = document.createElement("div");
    this.container.classList.add("key__container");
    const face = document.createElement("div");
    face.classList.add("key__face");
    const text = document.createElement("p");
    text.classList.add("key__text");
    keyObj.type === "char"
      ? (text.textContent = keyObj.key)
      : keyObj.name !== undefined
      ? (text.textContent = keyObj.name)
      : (text.textContent = keyObj.code);
    face.append(text);
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
    this.container.append(face);
    if (keyObj.type === "event") {
      keyObj.isArrow
        ? this.container.classList.add("key__container_arrow")
        : this.container.classList.add("key__container_event");
    }
  }
}
