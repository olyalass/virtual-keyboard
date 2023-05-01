import "./style.scss";

export class Footer {
  item;
  lang = "Eng";

  constructor() {
    this.item = document.createElement("footer");
    this.item.classList.add("footer");
    const text = document.createElement("p");
    text.classList.add("footer__text");
    text.textContent = "Layout:  ";
    const eng = document.createElement("span");
    eng.classList.add("footer__span");
    eng.textContent = "Eng ";
    const croat = document.createElement("span");
    croat.classList.add("footer__span");
    croat.textContent = "HR/SRB";
    text.append(eng, croat);
    this.lang !== "Eng"
      ? croat.classList.add("footer__span_selected")
      : eng.classList.add("footer__span_selected");
    const date = document.createElement("p");
    date.classList.add("footer__text", "footer__link");
    date.textContent = "2023";
    this.item.append(text, date);
  }
}
