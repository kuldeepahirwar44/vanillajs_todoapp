import { Todo } from "./types.ts";
import { $, $All } from "./utils.ts";
import { container, inputText } from "./components.ts";

const todoCardCom = (obj: Todo) => `
    <div class="todoCard" id="${obj.id}">
      <span>${obj.value}</span>
      <i class="fa-solid fa-trash-can"></i>
    </div>
  `;

const Layout = () => `
    <h1 class="heading">My ToDooooo......</h1>
    <div class="todoSectionCon">
        ${inputText()}
        <div class="todoCardsCon"></div>
    </div>
  `;

const generateLayout = () => container(Layout());

const initAddTodoFunctionality = () => {
  $(".inputTextCon i")?.addEventListener("click", () => {
    const inputEl = $(".inputTextCon input") as HTMLInputElement;
    if (!(inputEl && inputEl.value)) return;

    const id = "_" + new Date().getTime();
    const todo: Todo = { id, value: inputEl.value };

    $(".todoCardsCon")?.insertAdjacentHTML("beforeend", todoCardCom(todo));

    inputEl.value = "";
    setTimeout(() => todoChangeAddDeleteFunctionality(), 100);
  });
};

function todoChangeAddDeleteFunctionality() {
  const all_i = Array.from($All(".todoCardsCon > .todoCard > i"));

  all_i.forEach((el) => {
    el.addEventListener("click", (e: MouseEvent) => {
      const todo_id = (
        (e.currentTarget as HTMLElement)?.parentNode as HTMLElement
      )?.id;

      const el = $(`#${todo_id}`);
      if (el) el.style.display = "none";
    });
  });
}

const mainTodoFunctionalityInit = () =>
  setTimeout(() => initAddTodoFunctionality(), 500);

export const init = () => {
  mainTodoFunctionalityInit();
  return generateLayout();
};
