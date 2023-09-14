export const $All = (selector: string): NodeListOf<HTMLElement> =>
  document.querySelectorAll(selector);

export const $ = (selector: string): HTMLElement | null =>
  document.querySelector(selector);
