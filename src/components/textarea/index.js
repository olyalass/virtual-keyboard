import "./style.scss";

export class Textarea {
  container;
  input;

  constructor() {
    this.container = document.createElement("div");
    this.input = document.createElement("textarea");
    this.input.classList.add("textarea__input");
    this.container.append(this.input);
  }
}
