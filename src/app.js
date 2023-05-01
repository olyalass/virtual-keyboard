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
      if (e.detail.isCaps !== undefined) {
        this.isCaps = e.detail.isCaps;
        this.keyboard.changeNames(this.isCaps, this.lang);
      }
      this.textarea.addChar(e.detail.obj, this.isCaps, this.lang);
    });

    document.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey && event.metaKey) ||
        (event.shiftKey && event.code === "Space")
      ) {
        event.preventDefault();
        this.changeLang();
      }
    });
  }

  changeLang() {
    this.lang === "eng" ? (this.lang = "hr") : (this.lang = "eng");
    this.footer.onLangChange(this.lang);
    this.keyboard.changeNames(this.isCaps, this.lang);
  }
}
