import "./style.scss";

export class Key {
  container;

  constructor(name) {
    this.container = document.createElement("div");
    this.container.classList.add("key__container");
    const face = document.createElement("div");
    face.classList.add("key__face");
    const text = document.createElement("p");
    text.classList.add("key__text");
    text.textContent = name;
    face.append(text);
    this.container.append(face);
  }
}
