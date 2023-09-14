import "./styles/style.css";
import { init } from "./todoHandler.ts";

const root = document.querySelector("#app") as HTMLDivElement;
root.innerHTML = init();
