import "./style.scss";
import { Textarea } from "./components/textarea";
import { Keyboard } from "./components/keyboard";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export class App {
  container;
  isCaps;
  lang;
  footer;
  textarea;
  keyboard;

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("app");
    this.lang = "eng";

    const header = new Header();
    this.footer = new Footer();

    this.textarea = new Textarea();
    this.keyboard = new Keyboard();

    this.container.append(
      header.item,
      this.textarea.container,
      this.keyboard.container,
      this.footer.item
    );

    this.container.addEventListener("custom-key", (e) => {
      this.onVirtualKey(e.detail.isCaps, e.detail.obj);
    });

    document.addEventListener("keydown", (event) => {
      let virtualKey = this.keyboard.keysArr.find(
        (e) => e.obj.code === event.code
      );
      if (event.code === "ShiftRight") {
        virtualKey = this.keyboard.keysArr.find(
          (e) => e.obj.code === "ShiftLeft"
        );
      }
      if (virtualKey) {
        virtualKey.container.classList.add("key__container_clicked");
        if (
          (event.ctrlKey && event.metaKey) ||
          (event.shiftKey && event.code === "Space")
        ) {
          event.preventDefault();
          this.changeLang();
        }
        if (event.code !== "ArrowUp" && event.code !== "ArrowDown") {
          event.preventDefault();
          this.onVirtualKey(virtualKey.isCaps, virtualKey.obj);
        }
        if (event.code === "CapsLock") {
          virtualKey.container.click();
        }
        if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
          this.isCaps
            ? this.onVirtualKey(false, virtualKey.obj)
            : this.onVirtualKey(true, virtualKey.obj);
        }
      }
    });

    document.addEventListener("keyup", (event) => {
      let virtualKey = this.keyboard.keysArr.find(
        (e) => e.obj.code === event.code
      );
      if (event.code === "ShiftRight") {
        virtualKey = this.keyboard.keysArr.find(
          (e) => e.obj.code === "ShiftLeft"
        );
      }
      if (virtualKey) {
        virtualKey.container.classList.remove("key__container_clicked");
        if (event.code === "CapsLock") {
          virtualKey.container.click();
        }
        if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
          this.isCaps
            ? this.onVirtualKey(false, virtualKey.obj)
            : this.onVirtualKey(true, virtualKey.obj);
        }
      }
    });
  }

  changeLang() {
    this.lang === "eng" ? (this.lang = "hr") : (this.lang = "eng");
    this.footer.onLangChange(this.lang);
    this.keyboard.changeNames(this.isCaps, this.lang);
  }

  onVirtualKey(isCaps, obj) {
    if (isCaps !== undefined) {
      this.isCaps = isCaps;
      this.keyboard.changeNames(this.isCaps, this.lang);
    }
    this.textarea.addChar(obj, this.isCaps, this.lang);
  }
}
