import "./style.scss";

export class Textarea {
  container;
  input;
  cursor;

  constructor() {
    this.container = document.createElement("div");
    this.input = document.createElement("textarea");
    this.input.classList.add("textarea__input");
    this.container.append(this.input);

    this.cursor = this.input.selectionStart;
    this.input.addEventListener("click", () => {
      this.cursor = this.input.selectionStart;
    });
  }

  addChar(keyInfo, isCaps, lang) {
    if (keyInfo.key) {
      let key;
      if (lang === "eng") {
        isCaps && keyInfo.onShift
          ? (key = keyInfo.onShift)
          : (key = keyInfo.key);
      } else if (isCaps) {
        keyInfo.langOnShift
          ? (key = keyInfo.langOnShift)
          : (key = keyInfo.onShift);
      } else {
        !!keyInfo.lang ? (key = keyInfo.lang) : (key = keyInfo.key);
      }

      this.input.value =
        this.input.value.slice(0, this.cursor) +
        key +
        this.input.value.slice(this.cursor);
      this.cursor += 1;
    } else {
      if (keyInfo.code === "Backspace") {
        this.input.value =
          this.input.value.slice(0, this.cursor - 1) +
          this.input.value.slice(this.cursor);
        this.cursor -= 1;
      } else if (keyInfo.code === "Delete") {
        this.input.value =
          this.input.value.slice(0, this.cursor) +
          this.input.value.slice(this.cursor + 1);
      } else if (keyInfo.code === "ArrowLeft") {
        this.moveCursor("left");
      } else if (keyInfo.code === "ArrowRight") {
        this.moveCursor("right");
      }
    }
    this.setFocus();
  }

  setFocus() {
    this.input.focus();
    this.input.selectionStart = this.cursor;
    this.input.selectionEnd = this.cursor;
  }

  moveCursor(side) {
    side === "left" ? (this.cursor -= 1) : (this.cursor += 1);
    this.setFocus();
  }
}
