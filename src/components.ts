export const container = (children: string) =>
  `<div class="container">${children}</div>`;

export const inputText = () => {
  return `
    <div class="inputTextCon">
      <input type="text" placeholder="todo" />
      <i class="fa-solid fa-plus" tabindex="1"></i>
    </div>
    `;
};
