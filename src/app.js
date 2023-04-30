import "./style.scss";
import { Textarea } from "./components/textarea";
import { Keyboard } from "./components/keyboard";
import { Hints } from "./components/hints";

const root = document.querySelector("body");
root.classList.add("app");

const textarea = new Textarea();
const keyboard = new Keyboard();
const hints = new Hints();

root.append(textarea.container, keyboard.container, hints.container);
