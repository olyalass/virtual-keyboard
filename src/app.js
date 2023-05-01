import "./style.scss";
import { Textarea } from "./components/textarea";
import { Keyboard } from "./components/keyboard";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const root = document.querySelector("body");
root.classList.add("app");

const header = new Header();
const footer = new Footer();

const container = document.createElement("main");
container.classList.add("app__container");

const textarea = new Textarea();
const keyboard = new Keyboard();

root.append(header.item, textarea.container, keyboard.container, footer.item);
