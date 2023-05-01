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

  addChar(keyInfo, isCaps) {
    if (keyInfo.key) {
      let key;
      isCaps && keyInfo.onShift ? (key = keyInfo.onShift) : (key = keyInfo.key);
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
      }
    }
    this.setFocus();
  }

  setFocus() {
    this.input.focus();
    this.input.selectionStart = this.cursor;
  }
}
