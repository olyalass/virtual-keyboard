import "./style.scss";

export class Textarea {
  container;
  input;

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("textarea__container");
    this.input = document.createElement("input");
    this.input.setAttribute("type", "textarea");
    this.input.classList.add("textarea__input");
    this.container.append(this.input);
  }
}
